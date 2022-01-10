import React from "react"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { ServerManager } from "@/api/server"
import { RootContainer, SignInCard, Typography, Button } from "./styles"

export default function ConfirmEmail(
   props: InferGetServerSidePropsType<typeof getServerSideProps>
): JSX.Element {
   return (
      <RootContainer>
         <SignInCard>
            <Typography
               align={"center"}
               color={"primary"}
               variant="h4"
               sx={{ flexGrow: 1 }}
               fontWeight={500}
            >
               Carribean Online Judge
            </Typography>
            <Typography
               align={"center"}
               color={"primary"}
               variant="h5"
               sx={{ flexGrow: 1 }}
               fontWeight={500}
            >
               {props.confirmedAccount
                  ? "The email has been confirmed successfully"
                  : "An unexpected error occurred during email confirmation"}
            </Typography>
            {props.confirmedAccount && <Button>Go to Sign In</Button>}
         </SignInCard>
      </RootContainer>
   )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { email, token } = context.query
   const serverManager = new ServerManager()

   serverManager
      .confirmEmail(email as string, token as string)
      .then(() => {
         return {
            props: {
               confirmedAccount: true,
            },
         }
      })
      .catch((e) => console.log(e))

   return {
      props: {
         confirmedAccount: false,
      },
   }
}
