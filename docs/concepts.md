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

Set is the "building blocks" of the entire Style Chemistry system.
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

The **set** field is a list of "scalar" values that the getter functions will resolve to.

#### selectors

The **selectors** field is a map. The key is a "selector" string and the value is an index pointing to a value inside **set**. The above example uses dot notation to add additional level of hierarchy, this is not restricted, you may use whatever naming convention you want. More than one selectors can point to the same value, notice that `body.large` and `heading.small` points to the same value, `rem(18)`, in the above example.

*In SCSS, the index starts with 1 and not 0.*

#### default

The **default** field value is an index that points to a value inside **set**. This value is the default value if no selector or index is passed inside a getter function.

For example:

```scss
.body {
  // The getter function, font-size(),
  // will return 16px based on the Element Set example above.
  font-size: elements.font-size();
}
```

### SuperSet

SuperSet is a map of Sets. They key is the "name" of the set.

```scss
$colors: (
  'paper': (
    'set': (
      #FFFFFF,
      #FAFAFA,
      #F5F5F5,
      #EFEFF0,
      #E4E5E7,
    ),
    'selectors': (
      'lighter': 1,
      'light': 2,
      'paper': 3,
      'dark': 4,
      'darker': 5,
    ),
    'default': 3,
  ),
  'ink': (
    'set': (
      #5C6370,
      #454A54,
      #2E3138,
      #121721,
    ),
    'selectors': (
      'lightest': 1,
      'lighter': 2,
      'light': 3,
      'ink': 4,
    ),
    'default': 4,
  ),
);
```

## Getters

Getters are functions that resolve a value from a Set or SuperSet. Although getter functions can accept a set index, it is generally good practice to use selectors when trying to get a value from a set.

## Elements

Elements are composed of, and restricted to, the following **16 Sets** and **1 SuperSet** (`colors`).
They are listed below, in canonica order, with their associated getter function names:

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

Compounds is a level of abstraction above Elements.
Unlike Elements, Compounds are not restricted, which means you can define your own Sets and/or SuperSets.
In addition to this, you can use and interpolate Element Getters in your set values.

An example:

```scss
$gradients: (
  'set': (
    'linear-gradient(90deg, #{elements.color('magenta', 'lighter')}, #{elements.color('indigo', 'light')})',
    'linear-gradient(45deg, #{elememts.color('peach', 'light')}, #{elements.color('cyan', 'light')})',
  ),
  'selectors': (
    'sunset': 1,
    'beach': 2,
  ),
  'default': 1,
);
```

## Mixtures

Mixtures is the final level of abstraction in Style Chemistry. Similar to Compounds, you are free to define your own Sets and/or SuperSets, but now you can use Compound and Elements Getters in your set values.
