# Data Share Model
A composer model that allows to exchange data in a confidential way.

## Usage
To test the model use the online playground: https://composer-playground.mybluemix.net/

## Model
The model is composed just by one participant (*Person*)

Person Model:
```
participant Person identified by pID {
    o String pID
    o String firstName
    o String lastName
}
```
while the only asset is *DataAsset*
```
asset DataAsset identified by dataHash {
    o String dataHash
    o String value
    --> Person owner
    o String [] auth
}
```

The strict ACL rules do not allow unathorized users to see data that belongs to others, achieving confidentiality.
