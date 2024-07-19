import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Header from './Header';
import endpoints from '../constants/endpoints';
import ProjectCard from './projects/ProjectCard';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  containerStyle: {
    marginBottom: 2,
  },
  showMoreStyle: {
    margin: 25,
  },
};

const Projects = (props) => {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [data, setData] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    fetch(endpoints.projects, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);
  const numberOfItems = showMore && data ? data.length : 8;
  return (
    <>
      <Header title={header} />
      {data
        ? (
          <div className="section-content-container">
            <Container>
              <Row xs={2} sm={10} md={20} lg={4} className="g-5">
                {data.projects?.slice(0, numberOfItems).map((project) => (
                  <Fade key={project.title}>
                    <ProjectCard project={project} />
                  </Fade>
                ))}
              </Row>

              {!showMore
                && (
                <Button
                  style={styles.showMoreStyle}
                  variant={theme.bsSecondaryVariant}
                  onClick={() => setShowMore(true)}
                >
                  show more
                </Button>
                )}
            </Container>
          </div>
        ) : <FallbackSpinner /> }
    </>
  );
};

Projects.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Projects;
