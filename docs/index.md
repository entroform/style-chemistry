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
    rem(12),
    rem(14),
    rem(16),
    rem(18),
    rem(24),
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

`selectors` is a map, the key must be a string and the value is an index pointing to the value inside `set`.
The above example uses dot notation to add additional level of hierarchy.
This is not restricted, you may use whatever naming convention you want.
More than one selectors can point to the same value, notice that `body.large` and `heading.small` points to the value `rem(18)` in the above example.

**In SCSS, the index starts with 1 not 0.**

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

  ),
);
```

## Getters

Getters are functions that resolve a value from a Set or SuperSet.

## Elements

Elements are composed of the following 16 Sets and 1 SuperSet (`colors`) listed below.
This is the canonical order of elements:

| Elements | Type |
|---|---|
| colors | SuperSet |
| opacities | Set |
| font-families | Set |
| font-sizes | Set |
| line-heights | Set |
| letter-spacings | Set |
| border-styles | Set |
| border-widths | Set |
| radii | Set |
| spaces | Set |
| heights | Set |
| widths | Set |
| breakpoints | Set |
| z-indices | Set |
| images | Set |
| times | Set |
| timing-functions | Set |

## Compounds

Compounds are a mix of Element Set and SuperSets.

## Mixtures

Mixtures are a mix of Compounds and Elements Sets and SuperSets.
