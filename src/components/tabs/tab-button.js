/** @jsx jsx */
import { jsx, Box } from 'theme-ui';

const TabButton = ({ tab }) => {
  const renderTitle = (title) => {
    if (Array.isArray(title)) {
      return (
        <div>
          {title.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      );
    } else {
      return title;
    }
  };

  return (
    <Box sx={styles.tabButton} className="tab-button">
      {tab.icon}
      {renderTitle(tab.title)}
    </Box>
  );
};
export default TabButton;

const styles = {
  tabButton: {
    display: 'flex',
    alignItems: 'center',
    fontSize: [1, null, null, null, 2],
    lineHeight: 1,
    svg: {
      mr: ['7px', null, null, null, '12px'],
      height: 20,
      width: 20,
    },
  },
};
