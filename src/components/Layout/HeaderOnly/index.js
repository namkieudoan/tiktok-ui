import Header from '~/components/Layout/components/Header';

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

export default HeaderOnly;
