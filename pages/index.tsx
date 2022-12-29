import { Button, Buttonv2, Switch, Separator, Progress, Checkbox, Toggle, Tooltip } from "../components"
import { Tabs, Alert } from "../patterns"

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
      <Alert />
    </div>
  )
}
