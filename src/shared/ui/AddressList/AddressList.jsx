import { observer } from 'mobx-react-lite'
import { AddressModel } from 'models'
import { useEffect } from 'react'

import styles from './styles.module.scss'
import { AddressItem } from './ui'

function AddressList() {
     useEffect(() => {
          AddressModel.fetch()
     }, [])

     return (
          <div className={styles.addressListWrapper}> 
               <div className={styles.addressList}>
                    {AddressModel.loading ? (
                         <>Loading....</>
                    ) : (
                         AddressModel.address.map((item) => {
                              return (
                                   <AddressItem item={item} key={item.title} />
                              )
                         })
                    )}
               </div>
          </div>
     )
}

export default observer(AddressList)
