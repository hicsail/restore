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
