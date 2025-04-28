# @kedata-software/slots

**@kedata-software/slots** is a collection of tailwind components using [Tailwind Variants](https://www.tailwind-variants.org/). It can be used as a base styling for creating your own components. Basically, these slots are agnostic to the framework you are using.

## Installation

**npm**

```bash
npm install @kedata-software/slots
```

**yarn**

```bash
yarn add @kedata-software/slots
```

## Usage

You can import the components directly from the package and use it into your project with framework like **React**, **Vue**, **SolidJS**, **Angular**, **Svelte**, etc.

```tsx
import { buttonSlot } from '@kedata-software/slots';

// React or Solid
const Button = (props) => {
  const slots = buttonSlot();

  return <button className={slots.root()} {...props} />;
};
```
