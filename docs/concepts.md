# Style Chemistry

Style Chemistry is a simple and open-ended system to help you keep your UI Component's styling consistent and harmonious.

- [Style Chemistry](#style-chemistry)
  - [Set and SuperSet](#set-and-superset)
    - [Set](#set)
      - [set](#set-1)
      - [selectors](#selectors)
      - [default](#default)
    - [SuperSet](#superset)
  - [Getters](#getters)
  - [Elements](#elements)
  - [Compounds](#compounds)
  - [Mixtures](#mixtures)

## Set and SuperSet

### Set

A set is the building block of the entire system.
It is a map that contains 3 fields: `set`, `selectors`, and `default`.

An example of an Element Set:

```scss
$font-sizes: (
  'set': (
    12px,
    14px,
    16px,
    18px,
    24px,
  ),
  'selectors': (
    'body.small': 2,
    'body.normal': 3,
    'body.large': 4,
    'heading.small': 4,
    'heading.normal': 5,
  ),
  'default': 3,
);
```

#### set

`set` is a list of scalar values.

#### selectors

`selectors` is a map, the key must be a string and the value is an index pointing to a value inside `set`.
The above example uses dot notation to add additional level of hierarchy. This is not restricted, you may use whatever naming convention you want.
More than one selectors can point to the same value, notice that `body.large` and `heading.small` points to the value `rem(18)` in the example above.

**In SCSS, the index starts with 1 and not 0.**

#### default

Default points to a single value. This is the default value if no selector is passed to the getter.

### SuperSet

SuperSet is a map of Sets. They key is the "name" of the set.

```scss
$colors: (
  'purple': (
    'set': (
      hsl(),
      hsl(),
      hsl(),
      hsl(),
      hsl(),
    ),
    'selectors': (
      'lighter': 1,
      'light': 2,
      'purple': 3,
      'dark': 4,
      'darker': 5,
    ),
    'default': 3,
  ),
  'ink': (
    'set': (

    ),
    'selectors': (

    ),
    'default': 3,
  ),
);
```

## Getters

Getters are functions that resolve a value from a Set or SuperSet.

## Elements

Elements are composed of the following **16 Sets** and **1 SuperSet** (`colors`) listed below and their getters.

This is the canonical order of elements:

| Element | Type | Getter |
|---|---|---|
| colors | SuperSet | color |
| opacities | Set | opacity |
| font-families | Set | font-family |
| font-sizes | Set | font-size |
| font-weights | Set | font-weight |
| letter-spacings | Set | letter-spacing |
| line-heights | Set | line-height |
| border-styles | Set | border-style |
| border-widths | Set | border-width |
| radii | Set | radius |
| spaces | Set | space |
| heights | Set | height |
| widths | Set | width |
| breakpoints | Set | breakpoint |
| z-indices | Set | z-index |
| images | Set | image |
| times | Set | time |
| timing-functions | Set | timing-function |

## Compounds

Unlike Elements, Compounds are not restricted, which means that you can define your own Sets and/or SuperSets.
Additionally you can use element and compound getters in your set value.

```scss
$gradients: (
  'set': (
    'linear-gradient(90deg, #{color('magenta')}, #{color('cyan')})',
    'linear-gradient(90deg, #{color('magenta')}, #{color('cyan')})',
  ),
  'selectors': (
    'sunset': 1,
    'beach': 2,
  ),
  'default': 1,
);
```

## Mixtures

Similar to Compounds, you can define your own Set and SuperSet but now you can also use Compound Getters **and** Elements Getters to resolve as a value.

```scss
$typography: (
  'set': (),
  'selectors': (),
  'default': 1,
);
```
