import { useQuery } from '@apollo/client';
import ReactMarkdown from 'react-markdown';

import { Header } from './Header.jsx';

import { GET_RESEARCH_AND_EVALUATIONS } from '../gql.jsx'

export default function ResearchAndEvals() {
  const { loading, error, data } = useQuery(GET_RESEARCH_AND_EVALUATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <Header
        title="Research and Evaluation"
        subtitle="Explore our research and evaluation efforts to improve psychiatric care."
      />
      <ReactMarkdown>{data.researchAndEvaluation.data.attributes.Body}</ReactMarkdown>
    </>
  )
}
