import tw from "twin.macro"
import Team from "../Home/Component/Team"
import Assistance from "./Component/Assistance"
import Goal from "./Component/Goal"
import OurTestimonial from "./Component/OurTestimonial"

function TeamPage() {
  return (
    <>
     <Team
        page='team'
        titleHeading='Our Team'
        secondHeading="We are Professional"
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.'
        styles={{
            cards : tw`mt-[5.95rem]`,
            paragraph: tw`mt-[1.2rem]`
        }}
      />
      <Assistance/>
      <Goal/>
      <OurTestimonial/>
    </>
  )
}

export default TeamPage