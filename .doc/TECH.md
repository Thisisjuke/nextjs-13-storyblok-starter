# Hint and Tips about not obvious things

## How can I fetch relations ?

- Documentation Link : https://www.storyblok.com/tp/using-relationship-resolving-to-include-other-content-entries
- Relations are resolve using the query param `resolve_relations=` in the URL.
- On the code side, we are using an util called `resolveRelations` inside `/helpers/resolveRelations.tsx`. 
  It just joins all the relations inside one big string comma separate, to be used as a query param.
```tsx
export const resolveRelations = [
  'page.header',
  'page.footer',
  'header.menu',
  'footer.sitemap',
  'testimonials-slider-blok.projects',
].join(',')
```

This `resolveRelation` string is used inside the object passed to `storyblokApi.get` :
```tsx
const sbParams = {
    version: preview ? 'draft',
    resolve_relations: resolveRelations,
    resolve_links: 'url',
}
const storyblokApi = getStoryblokApi()
const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams)
```

## Nothing appeared on the page but my CMS is good.

- Remember that you have to register block inside `/pages/app.tsx`.
- If there is something wrong, there will be a message on your console: `Component error-display-blok doesn't exist.` 

You can register components like this:
```tsx
const components = {
    'error-display-blok': ErrorDisplayBlok,
    'footer': FooterBlok,
    'header': HeaderBlok,
    'headings-blok': HeadingsBlok,
    'page': PageBlokWrapper,
    'technos-slider-blok': TestimonialsSliderBlok,
}
```
This object will then be used in `storyblokInit({/* ... */})`.