# boilerplate-react-ts-component
> boilerplate-react-ts-component-description

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @boilerplate-scope/boilerplate-react-ts-component
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | object | false    | null    | Default value.                        |
| onChange  | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@boilerplate-scope/boilerplate-react-component/dist/style.css";

  // or use sass
  @import "~@boilerplate-scope/boilerplate-react-component/dist/style.scss";

  // customize your styles:
  $boilerplate-react-component-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import BoilerplateReactTsComponent from '../@boilerplate-scope/boilerplate-react-component';
  import styled from 'styled-components';

  const Container = styled.div`
    width: 80%;
    margin: 30px auto 0;
  `;

  export default (props: any) => {
    return (
      <Container>
        <BoilerplateReactTsComponent />
      </Container>
    );
  };

  ```

## license
Code released under [the MIT license](https://github.com/afeiship/boilerplate-react-ts-component/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@boilerplate-scope/boilerplate-react-ts-component
[version-url]: https://npmjs.org/package/@boilerplate-scope/boilerplate-react-ts-component

[license-image]: https://img.shields.io/npm/l/@boilerplate-scope/boilerplate-react-ts-component
[license-url]: https://github.com/afeiship/boilerplate-react-ts-component/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@boilerplate-scope/boilerplate-react-ts-component
[size-url]: https://github.com/afeiship/boilerplate-react-ts-component/blob/master/dist/boilerplate-react-ts-component.min.js

[download-image]: https://img.shields.io/npm/dm/@boilerplate-scope/boilerplate-react-ts-component
[download-url]: https://www.npmjs.com/package/@boilerplate-scope/boilerplate-react-ts-component
