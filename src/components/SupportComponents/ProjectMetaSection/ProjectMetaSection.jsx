import viewProjectStyles from '../../MainComponents/ViewProjectComponent/ViewProjectComponent.module.css'

const MetaSection = ({ title, content }) => {
    return (
        <div className={viewProjectStyles.meta_section}>
            <span className={viewProjectStyles.meta_title}>{title}</span>
            <span className={viewProjectStyles.meta_content}>{content}</span>
        </div>
    )
}

export default MetaSection
