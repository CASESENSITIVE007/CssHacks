
import {
  Card,
  
  CardDescription,
 
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
      <CardTitle>2nd Prize</CardTitle>
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