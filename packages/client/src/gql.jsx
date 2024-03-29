import { gql } from '@apollo/client';

export const GET_LOGO_FULL_SVG = gql`
  query GetLogoFullSVG {
    logoFullSvg {
      data {
        attributes {
          LogoFullSVG {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
const headerdata = gql`
  {
    data {
      attributes {
        Header {
          Title
          Subtitle
          BackgroundColorHexCode
          BackgroundImage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
export const GET_HOMEPAGE_HEADER = gql`
  query GetHomePageHeader { homePageHeader ${headerdata} }
`;
export const GET_ABOUTPAGE_HEADER = gql`
  query GetAboutPageHeader { aboutPageHeader ${headerdata} }
`;
export const GET_TREATMENTSANDSERVICESPAGE_HEADER = gql`
  query GetTreatmentsAndServicesPageHeader { treatmentsAndServicesPageHeader ${headerdata} }
`;
export const GET_TEAMPAGE_HEADER = gql`
  query GetTeamPageHeader { teamPageHeader ${headerdata} }
`;
export const GET_TESTIMONIALSPAGE_HEADER = gql`
  query GetTestimonialsPageHeader { testimonialsPageHeader ${headerdata} }
`;
export const GET_RESEARCHANDEVALUATIONPAGE_HEADER = gql`
  query GetResearchAndEvaluationPageHeader { researchAndEvaluationPageHeader ${headerdata} }
`;
export const GET_GETINVOLVEDPAGE_HEADER = gql`
  query GetGetInvolvedPageHeader { getInvolvedPageHeader ${headerdata} }
`;
export const GET_BLOGPAGE_HEADER = gql`
  query GetBlogPageHeader { blogPageHeader ${headerdata} }
`;
export const GET_HOMEPAGE_CARDGRID = gql`
  query GetHomePageCardGrid {
    homePageCardGrids {
      data {
        attributes {
          CardGridCardData {
            id
            Index
            Icon {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            Title
            Text
            Link
          }
        }
      }
    }
  }
`;
export const GET_HOMEPAGE_INFOPANEL_TOP = gql`
  query GetHomePageInfoPanelTop {
    homePageInfoPanelTop {
      data {
        attributes {
          InfoPanelA {
            Title
            Subtitle
            Image {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            Icon {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            ButtonText
            ButtonLink
          }
        }
      }
    }
  }
`;
export const GET_HOMEPAGE_INFOPANEL_BOTTOM = gql`
  query GetHomePageInfoPanelBottom {
    homePageInfoPanelBottom {
      data {
        attributes {
          InfoPanelA {
            Title
            Subtitle
            Image {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            Icon {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            ButtonText
            ButtonLink
          }
        }
      }
    }
  }
`;
export const GET_WHYOURWORK_IMG = gql`
  query GetWhyOurWorkIsImportantImage {
    whyOurWorkIsImportant {
      data {
        attributes {
          Image {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
`;
export const GET_TREATMENTS_AND_SERVICES = gql`
  query GetTreatmentsAndServices {
    treatmentsAndServices {
      data {
        attributes {
          Body
        }
      }
    }
  }
`;
export const GET_TREATMENTS_CARDGRID = gql`
  query GetTreatmentsCardGrid {
    treatmentsCardGrids {
      data {
        attributes {
          CardGridCardData {
            id
            Index
            Icon {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            Title
            Text
            Link
          }
        }
      }
    }
  }
`;
export const GET_UPCOMING_ONGOING = gql`
  query GetUpcomingOngoing {
    aboutUpcomingOngoing {
      data {
        attributes {
          Body
        }
      }
    }
  }
`;
export const GET_HOWTOBECOME = gql`
  query GetHowToBecomeARestorePatient {
    howToBecomeARestorePatient {
      data {
        attributes {
          Body
        }
      }
    }
  }
`;
export const GET_TEAM_CATEGORIES_AND_MEMBERS = gql`
  {
    teamCategories {
      data {
        id
        attributes {
          Order
          TeamCategoryName
          Description
          team_members {
            data {
              id
              attributes {
                Order
                Name
                Photo {
                  data {
                    attributes {
                      url
                      height
                      width
                    }
                  }
                }
                Roles
                Languages
                Credentials
                Pronouns
                EBPs
                Bio
                Interests
              }
            }
          }
        }
      }
    }
  }
`;
export const GET_CURRENT_STUDIES = gql`
  query GetCurrentStudies {
    currentStudiess {
      data {
        id
        attributes {
          Order
          Image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          Title
          Description
        }
      }
    }
  }
`;
export const GET_RESEARCH_AND_EVALUATIONS = gql`
  query GetResearchAndEvaluations {
    researchAndEvaluation {
      data {
        attributes {
          Body
        }
      }
    }
  }
`;
export const GET_RECENT_BLOG_POSTS = gql`
  query GetBlogPosts($pageSize: Int!) {
    blogPosts(pagination: { page: 1, pageSize: $pageSize }, sort: "DatetimePublished:desc") {
      data {
        id
        attributes {
          Title
          DatetimePublished
          Body
          Category
          Author
          CoverImage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
export const GET_RECENT_BLOG_POSTS_EXCEPT = gql`
  query GetBlogPosts($id: ID!, $pageSize: Int!) {
    blogPosts(
      filters: { id: { ne: $id } }
      pagination: { page: 1, pageSize: $pageSize }
      sort: "DatetimePublished:desc"
    ) {
      data {
        id
        attributes {
          Title
          DatetimePublished
          Body
          Category
          Author
          CoverImage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
export const GET_BLOG_POSTS_BY_CATEGORY = gql`
  query GetBlogPostsByCategory($category: String!, $page: Int!, $pageSize: Int!) {
    blogPosts(
      filters: { Category: { contains: $category } }
      pagination: { page: $page, pageSize: $pageSize }
      sort: "DatetimePublished:desc"
    ) {
      data {
        id
        attributes {
          Title
          DatetimePublished
          Body
          Category
          Author
          CoverImage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
      meta {
        pagination {
          total
          pageSize
        }
      }
    }
  }
`;
export const GET_BLOG_POST = gql`
  query getBlogPost($id: ID!) {
    blogPost(id: $id) {
      data {
        attributes {
          Title
          DatetimePublished
          Body
          Category
          Author
          CoverImage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
export const GET_GETINVOLVED_CARDGRID = gql`
  query GetGetInvolvedCardGrid {
    getInvolvedCardGrids {
      data {
        attributes {
          CardGridCardData {
            id
            Index
            Icon {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            Title
            Text
            Link
          }
        }
      }
    }
  }
`;
