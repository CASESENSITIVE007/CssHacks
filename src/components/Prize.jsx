import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function prize()
{
  return (

    <div id="prize"  >
      <h1 className="text-white text-5xl font-serif text-center m-10 p-10" >PRIZES</h1>
    <div className="mx-auto w-3/4 flex justify-around gap-10  " >
      

    <Card className="w-[350px] dark ">
    <CardHeader>
      <CardTitle>1st Prize</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader>
  </Card>
    <Card className="w-[350px] dark ">
    <CardHeader>
      <CardTitle>2nt Prize</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader>
  </Card>
    <Card className="w-[350px] dark ">
    <CardHeader>
      <CardTitle>3rd Prize</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader>
  </Card>
  </div>
  </div>
  )
}