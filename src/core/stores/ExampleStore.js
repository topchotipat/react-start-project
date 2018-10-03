import React from 'react'
import { observable, action } from 'mobx'

export default class ExampleStore {
  @observable exampleData = ''

  @action
  sampleQuery() {
    console.log('12121')
    this.exampleData = '1111'
  }
}