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
export const GET_HOMEPAGE_CARDGRID = gql`
  query GetHomePageCardGrid {
    homePageCardGrids {
      data {
        attributes {
          CardGridCardData {
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
          }
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
          }
        }
      }
    }
  }
`;
export const GET_ABOUT_MISSION = gql`
  query GetAboutMission {
    aboutMission {
      data {
        attributes {
          Body
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
export const GET_TEAM_MEMBERS = gql`
  query GetTeamMembers {
    teamMembers {
      data {
        id
        attributes {
          Name
          Titles
          Roles
          Languages
          LinkToCV
          Photo {
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
                LinkToCV
                Titles
              }
            }
          }
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
          }
        }
      }
    }
  }
`;
