/* eslint-disable no-unused-vars */
/**
 * IMPERATIVE PROGRAMMING
 */
const IMPERATIVE = () => {
  function double(arr) {
    let results = []
    for (let i = 0; i < arr.length; i++) {
      results.push(arr[i] * 2)
    }
    return results
  }
  function add(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
      result += arr[i]
    }
    return result
  }

  // $('#btn').click(function () {
  //   $(this).toggleClass('highlight')
  //   $(this).text() === 'Add Highlight'
  //     ? $(this).text('Remove Highlight')
  //     : $(this).text('Add Highlight')
  // })
}

/**
 * DECLARATIVE PROGRAMING
 */
const DECLARATIVE = () => {
  function double(arr) {
    return arr.map(item => item * 2)
  }

  function add(arr) {
    return arr.reduce((prev, current) => prev + current, 0)
  }

  // <Btn
  //   onToggleHighlight={this.handleToggleHighlight}
  //   highlight={this.state.highlight}
  // >
  //   {this.state.buttonText}
  // </Btn>
}
