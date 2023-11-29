import ProfileContainer from "./profile/profileContainer";
import CommerceContainer from "./commerce/commerceContainer";
import styles from './account.module.css'

const Account = () => {


	return <>
		<div className={styles.wrap}>
			<ProfileContainer />
			<CommerceContainer />  {/* profile */}
		</div>

	</>
}


export default Account;