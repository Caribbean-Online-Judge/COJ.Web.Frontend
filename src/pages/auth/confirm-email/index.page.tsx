import React from "react"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"

export default function ConfirmEmail(
   props: InferGetServerSidePropsType<typeof getServerSideProps>
): JSX.Element {
   return (
      <h1>
         {props.confirmedAccount
            ? "The email has been confirmed successfully"
            : "An unexpected error occurred during email confirmation"}
      </h1>
   )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
   console.log(context.query)

   return {
      props: {
         confirmedAccount: false,
      },
   }
}
