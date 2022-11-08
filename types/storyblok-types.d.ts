export type MultilinkStoryblok =
  | {
      cached_url?: string;
      linktype?: string;
      [k: string]: any;
    }
  | {
      id?: string;
      cached_url?: string;
      linktype?: "story";
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      linktype?: "asset" | "url";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      [k: string]: any;
    };

export interface ErrorDisplayBlokStoryblok {
  errorCode?: string;
  title?: any;
  hint?: any;
  ctaText?: string;
  ctaUrl?: MultilinkStoryblok;
  _uid: string;
  component: "error-display-blok";
  [k: string]: any;
}

export interface FooterStoryblok {
  paragraph?: any;
  sitemap?: any[];
  copyright?: string;
  _uid: string;
  component: "footer";
  [k: string]: any;
}


export interface HeaderStoryblok {
  menu?: any[];
  ctaText?: string;
  ctaUrl?: MultilinkStoryblok;
  _uid: string;
  component: "header";
  [k: string]: any;
}

export interface HeadingBlokStoryblok {
  title?: any;
  subtitle?: any;
  _uid: string;
  component: "heading-blok";
  [k: string]: any;
}

export interface PageStoryblok {
  header?: string;
  body?: (ErrorDisplayBlokStoryblok | HeadingBlokStoryblok | TestimonialsSliderBlokStoryblok)[];
  footer?: string;
  seo_content?: string;
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface SeoStoryblok {
  title: string;
  noindex?: boolean;
  nofollow?: boolean;
  description: string;
  canonical?: string;
  disableGooglebot?: boolean;
  _uid: string;
  component: "seo";
  [k: string]: any;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface TestimonialStoryblok {
  description?: any;
  profilPicture?: AssetStoryblok;
  name?: string;
  position?: string;
  _uid: string;
  component: "testimonial";
  [k: string]: any;
}

export interface TestimonialsSliderBlokStoryblok {
  testimonials: any[];
  _uid: string;
  component: "testimonials-slider-blok";
  [k: string]: any;
}
