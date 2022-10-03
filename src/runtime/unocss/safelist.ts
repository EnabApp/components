export const safelist = [
    // Sizes
    ...(() => {
      let sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl', '10xl']
      return [
        ...sizes.map(size => `min-w-${size}`),
        ...sizes.map(size => `min-h-${size}`),
        ...sizes.map(size => `max-w-${size}`),
        ...sizes.map(size => `max-h-${size}`),
      ]
    })(),
    // Icons
    ...[
      'i-ic-baseline-calculate',
      'i-bxs-cart',
      'i-ri-todo-fill',
      'i-ci-settings-filled',
      'i-ic-baseline-check-box-outline-blank',
      'i-ic-baseline-check-box',
      'i-fluent-wallet-credit-card-20-filled',
      'i-fluent-radio-button-24-filled',
      'i-fluent-radio-button-24-regular',
    ],
    
]