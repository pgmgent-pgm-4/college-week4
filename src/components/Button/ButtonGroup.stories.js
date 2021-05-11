import {Primary, Secondary} from './Button.stories'

import ButtonGroup from './ButtonGroup';

export default {
    title: 'Button Group',
    component: ButtonGroup
}

const Template = (args) => <ButtonGroup {...args}></ButtonGroup>

export const Group = Template.bind({})

Group.args = {
    buttons: [{...Primary.args}, {...Secondary.args}]
}