import {gql} from '@apollo/client'

export const LOAD_PARENT_CATEGORY = gql`
    query {
        categories{
            id
            name
            is_parent
            slug
            status
            children{
                id
                name
                slug
                status
            }
        }
    }
`

export const LOAD_PRODUCTS = gql`
 query {
    products {
        id
        title
        description
        price
        sku
        slug
        category {
            id
            name
        }
        sizes {
            id
            size
        }
        colors {
            id
            color
        }
        images {
            id
            image
            is_default
        }
    }
 }
`
export const LOAD_PRODUCTS_CATEGORY = gql`
query($slug: String!){
    category(slug: $slug) {
        id
        name
        products{
            id
            title
            price
            slug
            images{
                id
                image
                is_default
            }
            sizes{
                id
                size
            }
        }
    }
}
`
export const LOAD_PRODUCT = gql`
query($slug: String!){
    product(slug: $slug) {
        id
        title
        price
        slug
        sku
        description
        colors{
            id
            color
        }
        sizes{
            id
            size
        }
        images{
            id
            image
            is_default
        }  
    }
}
`
export const LOAD_FEATURED_PRODUCTS = gql`
 query($featured: Boolean!){
    productsByFeatured(featured: $featured){
        id
        title
        price
        slug
        sku
        featured
        description
        colors{
            id
            color
        }
        sizes{
            id
            size
        }
        images{
            id
            image
            is_default
        }
    }
 }
`

export const LOAD_ORDER = gql`
query($id: ID!){
    order(id: $id){
        id
        orderDetails{
            id
            title
            size
            color
            image
            price
            qty
          }
          shipping{
            id
            name
            phone
            email
            city
            address
            state
            postal_code
          }  
    }
}
`