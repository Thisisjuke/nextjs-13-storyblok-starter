# How to set up your StoryBlok CMS

> 💡 Feel free to delete this directory: `.doc` is used to keep images and for documentation purposes.

> ⚠ Disclaimer (again 😿) :
> - Many things are opinionated: I structure things in a certain way inside the CMS, a way I think things are clearer. 
> You can move around and rename things but **mirror this changes** inside the code: if you don't follow exactly these steps, the app may not start.

During this tutorial, I will also share StoryBlok CMS URL that contains `XXXXXX` like `https://app.storyblok.com/#/me/spaces/XXXXXX/`: replace `XXXXXX` by your Space ID.
This URL is also the first one you will see after joining a Workspace.

I will also share API routes with you, to check that you have well formatted things. It has a token inside its params: Please replace `[YOUR_API_KEY]` by your real API key.
There will be no relations fetched in the API routes inside this tutorial: they are of course fetched on the application. Learn more here : [How can I fetch relations ?](TECH.md#how-can-i-fetch-relations-)

## Lexique

- `Block`: The shape of a content. A block contains fields. *Example: HeadingsBlok - a block that will ask for a title and a subtitle*.
- `Story`: An instance of a Block. *Example: HomePageHeading - a story of HeadingsBlok, used on the homepage. It will contain a custom title and subtitle*.
- `RichText`: A specific format that contains arrays and objects, used to display complexe text (like headings, bold, underline, etc.).

## Create a new Space

- Navigate to app.storyblok.com/#/me/spaces/new.
- You can then create an empty workspace.
- Fill the Workspace name.
- Choose your server Location : your country is subject to the GDPR, you have to chose `UE`.
- Push the content model from the repository using `yarn storyblock-push-components`. Find more information in the [Getting started](../README.md#Getting-started) section.

## Get an API key

You can find or create an API key in `Settigns > Access Token` (https://app.storyblok.com/#/me/spaces/XXXXXX/settings?tab=api).

You can choose between 4 access level:
   - Public: with this token, you will be able to fetch `published` content.
   - Preview: with this token, you will be able to fetch `published` and `unpublished` content.
   - Asset: with this token, you will be able to fetch assets like document or images.
   - Theme: with this token, you will be able to fetch theme related things.

For development purposes, you can create a `Preview key`.

For production purposes:
 - If you want the preview feature (you want with nextJS that has built-in preview), create a `Preview key`.
 - If you don't, create a `Public key`.

You now have your `Preview key`.

## Setup view and preview URL

- Go to `Settings > Visual Editor` (https://app.storyblok.com/#/me/spaces/XXXXXX/settings?tab=editor)
- Inside "Location (default environment)", you should have `https://localhost:3010`.
- In preview URL, add:
  - `Start Preview` = `https://localhost:3010/api/preview?secret=123` (should be the same as the value in `.env.local` : `PREVIEW_SECRET_TOKEN`)
  - `Stop Preview` = `https://localhost:3010/api/exit-preview`

We are using localhost here to test purposes. Before going live, replace these URL by application's production domain name.

## Check available Blocks inside the Block Library.

1. On the navigation menu, go to `Block Library` (https://app.storyblok.com/#/me/spaces/XXXXXX/components).
2. There is a list of all available blocks, split in categories. This repository is coming with those blocks:

   - `error-display-blok`: the block used inside `404` and `500` pages.
   - `footer`: manages the application Footer.
   - `header`: manages the application Header.
   - `heading-blok`: an application block used to display a title and subtitle.
   - `page`: most important ContentType of this demo, used to generate a NextJS page. It contains an `header`, a `footer`, a `seo_content`, and can handle 0, one or many blocks.
   - `seo`: a block that contains things related to the `<head>` of your page, like `title` or `description`.
   - `testimonial`: a ContentType that represents an unique testimonial.
   - `testimonials-slider-blok`: a block that displays testimonials in the form of a slider.

3. There are also 4 categories:

   - `blocks`: contains all blocks suffixed by `-blok`. These blocks are intended to go in the application: it's a display block.
   - `globals`: contains all blocks that will be use "globally" and call directly like "get me this header", and will not come as a Page "sub-block".
   - `resource`: contains ContentTypes. There are **resources that will be displayed in different ways** across your application: you can have a `Project` ContentType, displayed like a `ProjectCard`, a `ProjectResume` and `ProjectShowCase`.
   - `seo`: contains things related to the `seo` components. It's the place that you can enhance the relations of this component.

   > ⚠ There are many things and options missing in the `seo` block, like OpenGraph or Twitter related things. You may want to enhance this before going to production.

4. Click on `Page` to see its options:
   - `fields`: the fields on this block, here `header`, `footer`, `seo_content`, and `body`.
   - `config`: you can change the display name, color, add a preview image, etc.
   - `presets`: use presets you have previously created (none in this demo).
   - `version`: history of the modifications of this block.

5. Come back to `fields` and click on `Header`: 
   - It's Relation Type called "Single-Option". Here you will be able to choose another block to do a 1-1 relation.
   - In the 'Source' part, you can see that the Source is "Stories" and restricted to "header": this field will only take a header story (the autocomplete will also propose only header stories).
   - The field is not required in the case of some pages have a different layout without Header.

6. Come back to `fields` and click on `testimonial`:
   - `description` of type "RichText": come with a WYSIWYG, and it's handled with a RichText component in the application.
   - `profilPicture` of type "Asset": like a 1-1 relation but will not need to ask for this relation when fetching.
   - `name`: plain text.
   - `position`: plain text.

## Create Folder structure

1. On the navigation menu, go to `Content` (https://app.storyblok.com/#/me/spaces/XXXXXX/stories/0/0/index/0).
   
   This is the place where you will write all your stories. It's empty at the moment (or not ? Delete everything we will start from fresh content repository).

2. Click on top-right "+ Create New". You should see 2 options:

   - Folder: Can be used to group your entries of specific content types.
   - Story: A “Story” is what we call the content entries you can create in Storyblok.
   
3. We will create 4 folders (keep default slugs):

   - Pages: all the stories inside this folder will be used to create NextJS pages.
   In the "Content type" section, check "Choose existing" and choose "Page": we only want Pages in this folder.
   > ⚠ It's the most important folder of this tutorial.
   - Globals: Stories (mainly blocks) that will be used globally in the application, like `Header`.
   - Testimonials: here you will create some testimonial that will be used in other stories. It's a good practice to split Stories by ContentType.
     In the "Content type" section, check "Choose existing" and choose "Testimonial": we only want Testimonials in this folder.
   - SEO: you have to create **one SEO Story by page**, so keep them in their own Folder. 

4. Add Home Page:
   
   - Click on `Pages` folder.
   - Click on top-right "+ Create New" > "Story"
   - Name = `Home`. Slug = `home`
   > ⚠ Slug has to be `home` for the homepage.
   - If you check your screen, they are few elements:
     - Right menu "Pages > General": here you will have to chose blocks, like your header, footer, etc.
     - Top right "Save" button: save modifications. Your story is now in `unpublished` state : you can now fetch this resource with a `preview` API key.
     - Top right "Publish" button: save and publish modifications. Your story is now in `published` state : you can now fetch this resource with a `public` or `preview` API key.
     - Top left "URL actually previewed": the application url that you are looking right now.
       - Now it's wrong : `https://localhost:3010pages/home`. The homepage route of your application has to be `https://localhost:3010/`.
       - We will change this in the configuration menu!
     - Top "Menu": items relative to this story, feel free to explore.
   - Click on top center menu "Entry configuration"
   - Change `realpath` to `/`. The slug still have to be `home`.
   - Click "Save & Close" : Now the top left URL is `https://localhost:3010`.
   - Click on top right "Publish".
   - Go to this API url to see that your page is well created `https://api.storyblok.com/v2/cdn/stories/pages/home?token=[YOUR_API_KEY]`.

5. Start your application using `yarn dev`. You should see an empty white page, both on localhost and on StoryBlok CMS view. 
   If something is going wrong, you should see a 404 error: `Error: Request failed with status code 404.`. It happens because there is no pages in your application.
   Verify that you followed the previous steps.

6. Go back to "Content" (https://app.storyblok.com/#/me/spaces/XXXXXX/stories/0/0/index/0) and click on "Globals" folder.
___
   - Create a new "Story":
     - Name: `Header`.
     - slug: `header`.
     - ContentType: "choose existing" > `Header`.
     - Fill the story on the right:
       - Menu: choose `Home`, then "Add (1)".
       - ctaText: `Pet the frog`.
       - ctaUrl: choose "Home".
     - Click on top right "Publish".
     - Go to this API url to see that your page is well created `https://api.storyblok.com/v2/cdn/stories/globals/header?token=[YOUR_API_KEY]`.
     > 💡 You can come back later to add more pages/links inside "Menu" and change the URL for the CTA.
___
  - Create a new "Story":
    - Name: `Footer`.
    - slug: `footer`.
    - ContentType: "choose existing" > `Footer`.
    - Fill the story on the right:
      - paragraph: `We think too small, like the frog at the bottom of the well. He thinks the sky is only as big as the top of the well. If he surfaced, he would have an entirely different view.`
      - sitemap: choose `Home`, then "Add (1)".
      - copyright: `© 2022 This is a Frog! All rights reserved.`.
    - Click on top right "Publish"
    - Go to this API url to see that your page is well created `https://api.storyblok.com/v2/cdn/stories/globals/footer?token=[YOUR_API_KEY]`.
    > 💡 You can come back later to add more pages/links inside "sitemap".
___
  - Create a new "Story":
    - Name: `Error Page`.
    - slug: `error-page`.
    - ContentType: "choose existing" > `Page`.
    - Click on top center menu "Entry configuration" and change `realpath` to `/500`.
    - Fill the story on the right:
        - Header: choose `Header`.
        - Footer: choose `Footer`.
        - seoContent: let it empty.
        - body: you can add whatever you want, but in this tutorial, add a new `ErrorDisplayBlok`.
          - Click on this new block and fill his content.
    - Click on top right "Publish".
    - Go to this API url to see that your page is well created `https://api.storyblok.com/v2/cdn/stories/globals/error-page?token=[YOUR_API_KEY]`.
___
  - Create a new "Story":
      - Name: `Not Found Page`.
      - slug: `not-found-page`.
      - ContentType: "choose existing" > `Page`.
      - Click on top center menu "Entry configuration" and change `realpath` to `/404`.
      - Fill the story on the right:
          - Header: choose `Header`.
          - Footer: choose `Footer`.
          - seoContent: let it empty.
          - body: you can add whatever you want, but in this tutorial, add a new `ErrorDisplayBlok`.
            - Click on this new block and fill his content.
      - Click on top right "Publish".
      - Go to this API url to see that your page is well created `https://api.storyblok.com/v2/cdn/stories/globals/not-found-page?token=[YOUR_API_KEY]`.
___
  > ⚠ Slug names are mandatory here because our application will fetch directly these 4 API url.

7. Go back to "Content" (https://app.storyblok.com/#/me/spaces/XXXXXX/stories/0/0/index/0) and click on "SEO" folder. Create a SEO Story. Fill it.

8. Go back to "Content" (https://app.storyblok.com/#/me/spaces/XXXXXX/stories/0/0/index/0) and click on "Testimonials" folder.

    - Create a new "Story":
        - Name: `Frog Testimonial`.
        - slug: `frog-testimonial`.
        - ContentType: "choose existing" > `Testimonial`.
        - Fill the story on the right.
        - Click on top right "Publish".

    > 💡 You can create more if you want to see diverse cards in the demo slider.

9. Go back to "Content" (https://app.storyblok.com/#/me/spaces/XXXXXX/stories/0/0/index/0) and click on "Pages" folder.
    
    - Fill the story with a `Header`, `Footer`, `SEO`.
    - Add to the body:
      - `HeadingBlok`: click on it and fill it.
      - `Testimonial Slider Block`: click on it and fill it.

10. Preview the content. As you can see, our page is still on `Draft` because we didn't click on "Publish". 
    If you want to preview this content before publishing, click on "Change URL" on the top left and select "Start preview". To disable preview, change URL to "Stop preview".

11. Voilà 🐸✨

## Setup NextJS ISR (revalidation for production)

- Go to `Settings > Webhooks` (https://app.storyblok.com/#/me/spaces/XXXXXX/settings?tab=webhooks)
- Inside "Location (default environment)", you should set `PRODUCTION_DOMAIN_NAME.com/api/revalidate?secret=123` (should be the same as the value in `.env.local` : `STORYBLOK_SECRET_TOKEN`)
