Create procedure spGetAllEmployees        
as        
Begin        
    select *        
    from tblEmployee     
    order by EmployeeId        
END

SELECT * FROM tblEmployee

INSERT INTO dbo.tblEmployee
        ( Name, City, Department, Gender )
VALUES  ( 'Rama', -- Name - varchar(20)
          'PGW', -- City - varchar(20)
          'IT', -- Department - varchar(20)
          'Male'  -- Gender - varchar(6)
          )
          
          
INSERT INTO dbo.tblEmployee
        ( Name, City, Department, Gender )
VALUES  ( 'Kumar', -- Name - varchar(20)
          'Hsp', -- City - varchar(20)
          'HR', -- Department - varchar(20)
          'Male'  -- Gender - varchar(6)
          )     


INSERT INTO dbo.tblEmployee
        ( Name, City, Department, Gender )
VALUES  ( 'Suman', -- Name - varchar(20)
          'Hsp', -- City - varchar(20)
          'HR', -- Department - varchar(20)
          'FeMale'  -- Gender - varchar(6)
          )   
          
INSERT INTO dbo.tblEmployee
        ( Name, City, Department, Gender )
VALUES  ( 'Sunil', -- Name - varchar(20)
          'PGW', -- City - varchar(20)
          'IT', -- Department - varchar(20)
          'Male'  -- Gender - varchar(6)
          )                             