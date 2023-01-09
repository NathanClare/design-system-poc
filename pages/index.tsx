import { Buttonv2, Switch, Separator, Progress, Checkbox, Toggle, Tooltip, Input, Radiogroup, Icon, Slider, Toast, Popover } from '../components'
import { Dialog, Alert } from '../patterns'

export default function Home() {
  return (
    <div>
      <Buttonv2>Enabled</Buttonv2>
      <Separator />
      <Switch />
      <Progress />
      <Checkbox>Accept terms and conditions.</Checkbox>
      <Toggle />
      <Tooltip>tooltip</Tooltip>
      <Input />
      <Radiogroup />
      <Icon />
      <Slider />
      <Dialog />
      <Toast />
      <Popover />
      <Alert />
    </div>
  )
}
