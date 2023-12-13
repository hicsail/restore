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

The numbers in the 'Index'/'Order' fields do not necessarily need to be unique or adjacent, meaning that if it's convenient, you can give the cards/team members/team categories something like 1, 2, 2, 30, 33. This will be taken to mean the two '2's can appear in any order.

To make a 'Card Grid' card link to somewhere, add a link to the 'Link' field on the card. If the link is to somewhere within the RESTORE website, e.g. to the 'Our Team' page, the link should look like `/our-team`; if it is to somewhere outside the RESTORE website, e.g. to the Google homepage, the link should look like `https://www.google.com/`[^links].

[^links]: If you are wondering why this matters: the 'relative' form (starting with a slash) is more 'portable'. For instance, we are now developing on `https://restore.sail.codes`, but the final website domain will be different. If you put `https://restore.sail.codes` in front of all your links now, you'll have to redo them when we move the website.

Each Team Member can belong to one or more Team Categories.

### Notes on the Media Library

- When organizing assets in the Media Library, when moving assets into different folders, you will be presented with a dropdown menu of Locations; the dropdown may appear to only contain 'Media Library'; **click the caret** on the right end of this menu item to expand the location list.

- Swapping out images on content types: There are two ways to manage assets in the Media Library. One is from the Media Library page itself, accessible from the sidebar; the other is directly from some content type in the Content Manager (for instance if you are editing the Image field of the 'Home Page Info Panel Top' single type). When doing it the latter way, you interact with four action icons overlaid upon the image (Add, Copy Link, Delete, Edit). When you delete media from here, they get deleted from the Media Library entirely (as opposed to getting 'deleted' from the content type's _field_). So if your intention is to replace the media in question without deleting the original media from the Media Library, then you should use the "Add" button; from there, you can either choose existing media from the Media Library, or you can upload new media from your computer.

### Markdown (text formatting)

Much of the long-form text content on Strapi is editable using Markdown formatting[^strapimarkdown].

[^strapimarkdown]: In general, if on Strapi the text box has Bold/Italic/Underline buttons and a 'Preview mode' button, then that field can process Markdown formatting. If these buttons are not there, then that field cannot process Markdown formatting. The one exception to this is the Card Grid 'Text' fields; this field is intended to hold **short** plain text, but it was retro-fitted, so to speak, with Markdown capabilities to accommodate bullet points. I would not advise extensive formatting on this field for aesthetic reasons.

[Markdown Guide](https://www.markdownguide.org/getting-started/) is a great reference for Markdown; here is a handy [cheat sheet](https://www.markdownguide.org/cheat-sheet/). The document you are reading is formatted with Markdown!

Note that unfortunately **underlining is not supported, even though Strapi's Markdown editor has an underline button!** [Here](https://www.markdownguide.org/hacks/#underline) is a short note on why[^underline].

[^underline]: Slightly longer version for anyone interested: The Strapi button will add the `<u>` tags, but React Markdown [will not process HTML tags for safety reasons](https://www.npmjs.com/package/react-markdown#appendix-a-html-in-markdown).

### Linking to subsections

You may want to link to a particular subsection of the website, for instance from a card in a card grid. Here is a list of links you might want to use:

(If you need the _whole_ URL, put the website address in front; for example `/about#our-mission` in the table below would turn into `https://restore.sail.codes/about#our-mission`. If you are putting the link in a card grid Link field, you don't need the whole URL.)

| Subsection                                         | Link                                                                                     |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Mission statement                                  | /about#our-mission                                                                       |
| Mission statement: Strategies                      | /about#our-strategies                                                                    |
| Our Implementation Model                           | /treatments-and-services/services-to-the-health-system#our-implementation-model          |
| "RESTORE is overseen by advisory boards..."        | /treatments-and-services/services-to-the-health-system#boards                            |
| Implementation Frameworks                          | /treatments-and-services/services-to-the-health-system#implementation-frameworks         |
| Determinants Processes Evaluation                  | /treatments-and-services/services-to-the-health-system#determinants-processes-evaluation |
| Scope of Services to the System                    | /treatments-and-services/services-to-the-health-system#scope-of-services                 |
| Interested in Joining Trainings and Consultations? | /treatments-and-services/services-to-the-health-system#upcoming                          |
| Recovery curve graph                               | /treatments-and-services/services-to-our-patients#recovery-curve-graph                   |
| Our Treatment Model                                | /treatments-and-services/services-to-our-patients#our-treatment-model                    |
| Measurement Based Care                             | /treatments-and-services/services-to-our-patients#measurement-based-care                 |
| Treatments and Services                            | /treatments-and-services/services-to-our-patients#treatments-and-services                |
| Scope of Clinical Focus                            | /treatments-and-services/services-to-our-patients#scope-of-clinical-focus                |
| How to Become a RESTORE Patient                    | /treatments-and-services/services-to-our-patients#how-to-become-a-restore-patient        |

The team categories are also linkable; these links will change if you change the category names on Strapi[^trailing]. In general the link is "#" plus the category name with all spaces changed to dashes. This is **case-sensitive**. For example:

[^trailing]: If you do change the Team Category names on Strapi, don't put trailing spaces in the name, or these will end up in the URL for that category. For example, name your category `Office Dogs`, not `Office Dogs `, otherwise your link will be `/our-team#Office-Dogs-`.

| Subsection                                       | Link                                                       |
| ------------------------------------------------ | ---------------------------------------------------------- |
| Leadership                                       | /our-team#Leadership                                       |
| Clinical Team                                    | /our-team#Clinical-Team                                    |
| Implementation Facilitation Team                 | /our-team#Implementation-Facilitation-Team                 |
| Psychiatrists                                    | /our-team#Psychiatrists                                    |
| RESTORE Patient Advisory Board                   | /our-team#RESTORE-Patient-Advisory-Board                   |
| External Advisory Board                          | /our-team#External-Advisory-Board                          |
| Oppression Based Stress Clinician Advisory Board | /our-team#Oppression-Based-Stress-Clinician-Advisory-Board |
| Research Affiliates                              | /our-team#Research-Affiliates                              |

### Troubleshooting

- If you are seeing an error on the Restore website along the lines of 'X is null', chances are something was deleted from Strapi that was non-optional on the website; check if any recently edited fields are blank.

---

## Notes For Developers

After you create a new content type, you need to update the RESTORE Client's API Token to grant it read access (find and findOne) to that content type.
Go to Settings > API Tokens and edit the "Read content only" token.

The RESTORE Client's API Token is a custom token.
Do not create a new API Token of token type 'Read-only' and use that for the RESTORE Client -
such a token would have read access to (e.g.) the Strapi user list.
