# Software Requirements
## Vision
* What is the vision of this product?
  * Allowing user to create customized cards unique to their information provided by them
  * Allowing the user to create, edit, or delete trading card styled information
* What pain point does this project solve?
  * If you have too much information in one place that all looks the same it’s easy to want to skim that information instead of paying attention. But if it looks a little flashy, you keep your eye on the information presented to you.
* Why should we care about your product?
  * A fun way to create and share information about yourself in a playing card like form.
## Scope (In/Out)
* IN - What will your product do
  * Describe the individual features that your product will do.
    * Upload image file, stats, and description to create new card
    * Card size/webpage/device Responsiveness 
    * Update and/or delete cards I no longer want to see
    * Download button so that the user can download candidate information that they want
  * High overview of each. Only need to list 4-5
    * Upload image file, stats, and description to create new card
    * Card size/webpage/device Responsiveness 
    * Update and/or delete cards I no longer want to see
    * Download button so that the user can download candidate information that they want
* OUT - What will your product not do.
  * It will not do anything other than what we listed above.
 ## Minimum Viable Product vs
* What will your MVP functionality be?
  * Functional carousel, all of the cards needed
* What are your stretch goals?
  * Be able to upload new information and create a new card based on user input
  * Be able to download individual cards and its information
  * Search function to narrow down the cards the user sees
  * Allow for more customizability to the card
## Functional Requirements
* List the functionality of your product. This will consist of tasks such as the following:
  * An user can create and delete trading cards
  * A user can update their cards
  * A user can flip through existing cards
## Data Flow
* Describe the flow of data in your application. Write out what happens from the time the user begins using the app to the time the user is done with the app. Think about the “Happy Path” of the application. Describe through visuals and text what requests are made, and what data is processed, in addition to any other details about how the user moves through the site.
  * We see a card, its a cute card, the card has a delete button/icon, you can delete any card
  * There should be a ‘create new card’ button, maybe one that takes us to a form that the user can fill out
  * User puts in information, image file, details, etc.
  * We take that info as input data, parse it into a json file, populated with various card datas
  * Take the json data and use it to populate a playing card img src, etc.
  * The user can click forward or backward to see various cards
  * There’s a delete button on the bottom of the cards, if you click it, it deletes the information from the json file
  * There’s an edit button, if you click it, you can edit information in the json file
  * There’s a download button on the card, if you click it, you can download a copy of the card



