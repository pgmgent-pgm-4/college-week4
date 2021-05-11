import Button from './Button.js';
import React from 'react';

const ComponentWrapper = (Story) => {
    return <div style={{backgroundColor: 'pink'}}>
      <Story/>
    </div>
}

const StoryWrapper = (Story) => {
    return <div style={{margin: '2rem'}}>
      <Story/>
    </div>
}

export default {
    title: 'Button',
    component: Button,
    parameters: {
        backgrounds: {
            values: [
                {name: 'purple', value: 'purple'}
            ]
        }
    },
    decorators: [ComponentWrapper],
    argTypes: {
        type: {
            control: {
                type: 'radio',
                options: ['primary', 'secondary']
            }
        }
    }
}

const Template = (args) => <Button {...args}></Button>

export const Primary = Template.bind({});
Primary.args = {
    type: 'primary',
    label: 'Primary label'
}
Primary.parameters = {
    backgrounds: {
        values: [
            {name: 'blue', value: 'blue'}
        ]
    }
}

Primary.decorators = [StoryWrapper]

export const Secondary = () => <Button type='secondary'></Button>

Secondary.storyName = 'Default';