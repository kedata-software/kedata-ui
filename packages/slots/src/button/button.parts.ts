const buttonParts = {
  /**
   * @description
   * Required data:
   * - `data-variant`
   * - `data-size`
   * - `data-color-palette`
   * - `data-disabled`
   * - `data-loading`
   */
  root: 'button',
  startIcon: 'button__start-icon',
  endIcon: 'button__end-icon',
  lodingIcon: 'button__loading-icon',
} as const;

export default buttonParts;
