# _SuperGalacticAgeCalculator_
#### _RPG_, 02.07.2020_
#### By _**Andrew Philpott**_
## Description
_The purpose of this application is to detemine a user's age based on a planet's solar years and inform them on the number of years they have left to live on each planet given the average life expectancy._

## Specs
* _Spec: The application should be able to create a person object with an age in human years._
  * Input: age 20
  * Output: age 20

* _Spec: The application should be able to create a SolarYearCalculator object with its person property equal to the person object passed into the constructor._
  * Input: Pass in person age 20
  * Output: Return same person

* _Spec: The application should be able to access a persons age with a getter._
  * Input: Create person with age of 20 and call get age
  * Output: return 20

* _Spec: The application should be able to return earth years to mercury equivalent years._
  * Input: 20 earth years
  * Output: return 83.33 mercury years

* _Spec: The application should be able to return earth years to venus equivalent years._
  * Input: 20 earth years
  * Output: return 32.26 venus years

* _Spec: The application should be able to return earth years to mars equivalent years._
  * Input: 20 earth years
  * Output: return 10.64 mars years

* _Spec: The application should be able to return earth years to jupiter equivalent years._
  * Input: 20 earth years 
  * Output: return 1.69 jupiter years

* _Spec: The application should be able create a person object with a gender._
  * Input: Create person with age of 20 and a gender of Male 
  * Output: return person with age of 20 and a gender of Male

* _Spec: The application should be able to create a person with an initial life expectancy of 73.4 earth years for when the gender is Male_
  * Input: Create person that is Male
  * Output: Life expectancy is 73.4 years

* _Spec: The application should be able to create a person with an initial life expectancy of 80.1 earth years for when the gender is Female
  * Input: Create person that is Female
  * Output: Life expectancy is 80.1 years

* _Spec: The application should be able to return the persons age in an equivalent number of non earth planet years for the non earth planet specified.
  * Example 1:
  * Input: Persons age is 20, Mercury selected
  * Output: 83.33
  * Example 2:
  * Input: Persons age is 20, Venus selected
  * Output: 32.26
  * Example 3:
  * Input: Persons age is 20, Mars selected
  * Output: 10.64
  * Example 4:
  * Input: Persons age is 20, Jupiter selected
  * Output: 1.69


## Setup/Installation Requirements
_Clone this repository._
_npm install_
_npm run start._

## Support and contact details
_Issues or concerns? Contact us at andrewphilpott92@gmail.com_

## Technologies Used
_Html_
_CSS_
_JavaScript_
_jQuery_

### License
Copyright (c) 2020 **_Andrew Philpott_**

*This software is licensed under the MIT license.*