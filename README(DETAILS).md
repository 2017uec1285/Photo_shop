# Photo_shop

package used:

    1. bcrypt
    2. lodash
    3. jsonwebtoken
    4. fs
    5. express
    6. fawn
    7. multer
    8. body-parser
    9. congig
    10. cors
    11. mongoose

models:

    1. Product
          I. name
          II. productImage
    2. Item
          I. title
          II. Product(1)
          III. price
          IV. count
    3. User
          I. name
          II. email
          III. password
    4. Customer
          I. name
          II. phone
          III. balance
          IV. gold
    5. Order
          I. Customer(4)
          II. Item(2)
