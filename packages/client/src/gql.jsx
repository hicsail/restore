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
export const GET_BLOG_POSTS = gql`
  query GetBlogPosts {
    blogPosts {
      data {
        id
        attributes {
          Title
          DatetimePublished
          Body
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
          }
        }
      }
    }
  }
`;
