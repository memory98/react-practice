-- create table
CREATE TABLE IF NOT EXISTS `emaillist` (
	`no` INT NOT NULL AUTO_INCREMENT,
	`firstName` VARCHAR(100) NOT NULL,
	`lastName` VARCHAR(100) NOT NULL,
	`email` VARCHAR(200) NOT NULL,
	PRIMARY KEY(`no`))
ENGINE = InnoDB;

-- insert emaillist
insert into emaillist values(null, '둘','리','dooly@gmail.com');
insert into emaillist values(null, '마','이콜','michol@gmail.com');
insert into emaillist values(null, '도','우너','douner@gmail.com');
insert into emaillist values(null, '또','치','ddochi@gmail.com');