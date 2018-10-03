import React from 'react'
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

type Props = {
  title?: string
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`

const Header = styled.h1.attrs({
  isbig: props => props.isbig ? '3em' : '2em'
})`
  font-size: ${props => props.isbig};
`

const Page1 = (props: Props) => {
  const { ExampleStore, title } = props
  console.log('ExampleStore', ExampleStore)
  return (
    <Query
      query={gql`
  {
    allProducts{
     name
    }
}
`}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>error</p>
        if (error) return <p>error</p>
        console.log('data', data)
        return <Container >
          <Header isbig >{ExampleStore.exampleData}</Header>
          <Header>{title} </Header>
          {data.allProducts.map((data, index) => (
            <option key={index} value={data.name}>
              {data.name}
            </option>
          ))}
          <button type="button" onClick={() => ExampleStore.sampleQuery()}>Click Me!</button>
        </Container>
      }}
    </Query>
  )
}

Page1.defaultProps = {
  title: 'Page1'
}

export default compose(
  inject('ExampleStore'),
  observer
)(Page1)