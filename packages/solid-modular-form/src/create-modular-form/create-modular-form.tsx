import {
  batch,
  createSignal,
  createUniqueId,
  JSX,
  onCleanup,
  untrack,
} from 'solid-js';
import {
  setValue,
  createFormStore,
  type FieldValues,
  type ResponseData,
  type FieldPath,
  type FieldPathValue,
  validate,
  Field,
  FieldArray,
  getValues,
  type PartialValues,
  getErrors,
  type FieldArrayPath,
  type FieldArrayStore,
  type MaybeValue,
  type PartialKey,
  type ValidateForm,
} from '@modular-forms/solid';
import type { ExtFieldProps, FieldRefItem } from './index.types';

function createModularForm<
  TFieldValues extends FieldValues,
  TResponseData extends ResponseData = undefined,
>(params?: {
  initialValues?: PartialValues<TFieldValues>;
  validate?: ValidateForm<TFieldValues>;
}) {
  // Holds the references of the fields for focus and blur management
  const [refs, setRefs] = createSignal<FieldRefItem[]>([]);

  const formStore = createFormStore<TFieldValues, TResponseData>({
    initialValues: params?.initialValues,
    validate: params?.validate,
  });

  return [
    {
      store: formStore,
      /**
       * @description
       * Submits the form and triggers a validation. If the form is invalid, the focus will be set to the first invalid field.
       * @example
       * ```tsx
       * const [form] = createModularForm();
       * return (
       *  <form onSubmit={form.handleSubmit(async (values) => {
       *    // Do something with the values
       *  })}>
       *
       *  </form>
       * )
       * ```
       */
      handleSubmit: (fn: (values: TFieldValues) => Promise<void> | void) => {
        return async (e: any) => {
          e.preventDefault();

          batch(() => {
            formStore.internal.submitCount.set((count) => count + 1);
            formStore.internal.submitting.set(true);
            formStore.internal.submitted.set(true);
          });

          try {
            const isValid = await validate(formStore);
            if (isValid) {
              await fn(getValues(formStore) as TFieldValues);
            } else {
              const errors = getErrors(formStore);
              const names = Object.keys(errors);
              for (const name of names) {
                const activeRef = refs().find((item) => item.name === name);
                if (activeRef) {
                  activeRef.ref.focus?.();
                  break;
                }
              }
            }
          } finally {
            formStore.internal.submitting.set(false);
          }
        };
      },
      get invalid() {
        return formStore.invalid;
      },
      get dirty() {
        return formStore.dirty;
      },
      get touched() {
        return formStore.touched;
      },
    },
    {
      Field: function <TFieldName extends FieldPath<TFieldValues>>(
        props: FieldPathValue<
          TFieldValues,
          TFieldName
        > extends MaybeValue<string>
          ? PartialKey<ExtFieldProps<TFieldValues, TFieldName>, 'type'>
          : ExtFieldProps<TFieldValues, TFieldName>,
      ) {
        const inputId = createUniqueId();

        return (
          // @ts-ignore
          <Field of={formStore} name={props.name} type={props.type}>
            {(store) => {
              return props.children(
                {
                  get value() {
                    return store.value;
                  },
                  get name() {
                    return props.name;
                  },
                  get id() {
                    return inputId;
                  },
                  get invalid() {
                    return !!store.error;
                  },
                  ref: (el) => {
                    setRefs((prev) => [...prev, { name: props.name, ref: el }]);

                    onCleanup(() => {
                      setRefs((prev) => {
                        return prev.filter((item) => item.ref !== el);
                      });
                    });
                  },
                  onValueChange: (value) => {
                    untrack(() => {
                      setValue(formStore, props.name, value);
                      const submitted = formStore.internal.submitted.get();

                      if (submitted) {
                        validate(formStore, props.name);
                        return;
                      }
                    });
                  },
                },
                {
                  get error() {
                    return store.error;
                  },
                  get name() {
                    return props.name;
                  },
                  get for() {
                    return inputId;
                  },
                  get invalid() {
                    return !!store.error;
                  },
                },
              );
            }}
          </Field>
        );
      },
      FieldArray: function <
        TFieldArrayName extends FieldArrayPath<TFieldValues>,
      >(props: {
        name: TFieldArrayName;
        children: (
          store: FieldArrayStore<TFieldValues, TFieldArrayName>,
        ) => JSX.Element;
      }) {
        return (
          <FieldArray of={formStore} name={props.name}>
            {(store) => {
              return props.children(store);
            }}
          </FieldArray>
        );
      },
    },
  ] as const;
}

export default createModularForm;
