
export const parameters = {
  backgrounds: {
      values: [
          {name: 'red', value: 'red'}
      ]
  }
}

const GlobalWrapper = (Story) => {
  return <div style={{margin: '5rem'}}>
    <Story/>
  </div>
}

export const decorators = [GlobalWrapper];