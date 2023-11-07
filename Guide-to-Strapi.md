# Guide to Strapi for RESTORE

Much (not all) of the content on the RESTORE website is hosted on, and editable via, Strapi.

- RESTORE Staging Website: https://restore.sail.codes/
- RESTORE Strapi Staging - Admin Login: https://restore-strapi.sail.codes/admin/auth/login

To log in, go to https://restore-strapi.sail.codes/admin/auth/login and enter your credentials.

## Notes for RESTORE Site Editors

### Introduction

When you log in, you should see a sidebar on the left with three menu items: Content Manager, Media Library, and Settings.
You can ignore Settings.

The Content Manager is where you will find the content that you can add to or update.
Click into it and you will see a secondary sidebar.
This sidebar lists all the elements that you can edit.
"Collection Types" are elements of which there are more than one; "Single Types" are unique elements.
For example, there are many team members and many blog posts, but there is only one mission statement.

The Media Library is where you will find media (e.g. logos, icons, illustrations, headshots) for the website.
You can add media here just to host it - that way you can link to it from a blog post or from elsewhere on the web.
You will also need to add media here in order to use it in a website element. For example, when you go to add a new Team Member from the Content Manager, you will need to upload their headshot via the Media Library.

### Adding and editing content

To add a new element to a collection type - for instance to add a new blog post or team member - go to the Content Manager, find the relevant collection type in the sidebar, and then click on the "Create New Entry" button in the top right corner.
Fill out the fields, then click Save in the top right corner.

:warning: **You also need to click "Publish" after that in order for your changes to propagate to the website.**

To edit a collection type, similarly find it in the sidebar, and then click the relevant row in the list.
When you are finished editing, hit Save, and when you are ready, hit Publish.

To edit a single type, the steps are the same, minus finding the row in the list.

It is not possible to create new single types.

### Notes on specific data types

For the 'Card Grid' collections (Home Page/Get Involved/Treatments Card Grids), the order in which the cards appear on the website depends on the 'Index' field which you see when clicking into each card's data. Note that this is not the same as the 'ID' field listed in the table view!

Similarly, for the 'Team Category' collection, the 'Order' field determines the order of the Team Categories on the website.

Each Team Member can belong to one or more Team Categories.

### Other Gotchas

When organizing assets in the Media Library, when moving assets into different folders, you will be presented with a dropdown menu of Locations; the dropdown may appear to only contain 'Media Library'; click the caret on the right end of this menu item to expand the location list.

---

## Notes For Developers

After you create a new content type, you need to update the RESTORE Client's API Token to grant it read access (find and findOne) to that content type.
Go to Settings > API Tokens and edit the "Read content only" token.

The RESTORE Client's API Token is a custom token.
Do not create a new API Token of token type 'Read-only' and use that for the RESTORE Client -
such a token would have read access to (e.g.) the Strapi user list.
