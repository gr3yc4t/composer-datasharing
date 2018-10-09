/**
* Update Auth processor function
* @param {org.univpm.data_storage.DataAuthUpdate} tx The UpdateAuth transaction instance
* @transaction
*/
async function dataUpdateAuth (tx) {
  // Update the asset with the new value
  tx.data.auth.push( tx.authID );
  // Get the asset registry for the asset
  const assetRegistry = await getAssetRegistry( 'org.univpm.data_storage.DataAsset');
  // Update the asset in the asset registry
  await assetRegistry.update (tx.data);
}


/**
* Update Auth processor function
* @param {org.univpm.data_storage.DataUpdate} tx The Update transaction instance
* @transaction
*/
async function dataUpdate (tx) {
  // Update the asset with the new value
  tx.data.value = tx.new_value;
  // Get the asset registry for the asset
  const assetRegistry = await getAssetRegistry( 'org.univpm.data_storage.DataAsset');
  // Update the asset in the asset registry
  await assetRegistry.update (tx.data);
}