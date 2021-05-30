import {gql} from "@apollo/client";

export const LOGIN = gql`
mutation login (
 $email: String!
 $password: String!
) {
    login(
        email: $email
        password: $password
    ){
        id
        name
        email
        mobile
    }
}
`

export const SIGN_UP = gql`
 mutation signup (
     $name: String!
     $mobile: String!
     $email: String!
     $password: String!
 ){
     signup (
         name: $name
         mobile: $mobile
         email: $email
         password: $password
     ){
         id
         name
         email
     }
 }
`

export const CREATE_ORDERS = gql`
 mutation createOrder(
     $user_id: ID!
     $orderDetail: [orderDetailInput!]!
     $shipping: shippingInput!
 ){
     createOrder (
         user_id: $user_id
         orderDetail: $orderDetail
         shipping: $shipping
     ){
         id
         orderDetails{
             id
             title
             color
             size
             image
             price
         }
         shipping {
             id
             city
             address
         }
     }
 }
`