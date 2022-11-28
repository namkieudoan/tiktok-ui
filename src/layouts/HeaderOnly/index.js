import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">
                    {/* vì content động nen phải truyền từ ngoài vào */}
                    {children}
                </div>
            </div>
        </div>
    );
}
HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};
export default HeaderOnly;
