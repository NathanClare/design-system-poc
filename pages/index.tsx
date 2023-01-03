import { Button, Buttonv2, Switch, Separator, Progress, Checkbox, Toggle, Tooltip, Input, Radiogroup, Icon, Slider } from "../components"
import { Tabs, Alert, Dialog } from "../patterns"

export default function Home() {
  return (
  
    <div>
      <Buttonv2 children={`Enabled`} />
      <Separator  />
      <Switch />
      <Progress />
      <Checkbox children={`Accept terms and conditions.`} />
      <Toggle />
      <Tooltip children={`tooltip`} />
      {/* <Alert /> */}
      <Input />
      <Radiogroup />
      <Icon />
      <Slider />
      <Dialog />
    </div>
  )
}
