'use strict';
describe('Table Demos',function(){
    beforeEach(function(){
        browser.get('test/e2e/testee/time/web/combined.html');
        browser.sleep(2000);
    });
    afterEach(function(){
    });
    // 选择时间点
    it('双时间控件和tab控件结合点击选择时间点是否正确',function(){
        //直接输入点击显示结果
        var time=element(by.css(".demo1 p"));
        var timeOne = element(by.css(".demo1 input:first-child"));
        var timeTwo = element(by.css(".demo1 input:nth-child(3)"));

        var timeOneDays = element(by.css(".datetimepicker:nth-child(7)>.datetimepicker-days thead tr .switch"));
        var timeOneMonths = element(by.css(".datetimepicker:nth-child(7)>.datetimepicker-months thead tr .switch"));
        var timeOneYears = element(by.css(".datetimepicker:nth-child(7)>.datetimepicker-years thead tr .switch"));

        var oneYears = element(by.css(".datetimepicker:nth-child(7)>.datetimepicker-years tbody tr:first-child td span:nth-child(2)"));
        var oneMonths = element(by.css(".datetimepicker:nth-child(7)>.datetimepicker-months tbody tr:first-child td span:nth-child(1)"));
        var oneDays = element(by.css(".datetimepicker:nth-child(7)>.datetimepicker-days tbody tr:first-child td:nth-child(6)"));

        timeOne.click();
        
        timeOneDays.click();
        timeOneMonths.click();
        timeOneYears.click();

        oneYears.click();
        oneMonths.click();
        oneDays.click();
        
        var timeTwoDays = element(by.css(".datetimepicker:nth-child(9)>.datetimepicker-days thead tr .switch"));
        var timeTwoMonths = element(by.css(".datetimepicker:nth-child(9)>.datetimepicker-months thead tr .switch"));
        var timeTwoYears = element(by.css(".datetimepicker:nth-child(9)>.datetimepicker-years thead tr .switch"));

        var twoYears = element(by.css(".datetimepicker:nth-child(9)>.datetimepicker-years tbody tr:first-child td span:nth-child(2)"));
        var twoMonths = element(by.css(".datetimepicker:nth-child(9)>.datetimepicker-months tbody tr:first-child td span:nth-child(1)"));
        var twoDays = element(by.css(".datetimepicker:nth-child(9)>.datetimepicker-days tbody tr:first-child td:nth-child(6)"));

        timeTwo.click();
        
        timeTwoDays.click();
        timeTwoMonths.click();
        timeTwoYears.click();

        twoYears.click();
        twoMonths.click();
        twoDays.click();
        
        
        time.getText().then(function(txt){
            expect(txt).toBe("2010-01-01 2010-01-01");
        });
    });

    it('双时间控件和tab控件结合点击选择时间点是否正确',function(){
        //直接输入点击显示结果
        var time=element(by.css(".demo1 p"));
        var timeOne = element(by.css(".demo1 input:first-child"));
        var timeTwo = element(by.css(".demo1 input:nth-child(3)"));
        var select = element(by.css(".demo1 select"));
        var option = element(by.css(".demo1 option:last-child"));
        select.click();
        option.click();

        var timeOneMonths = element(by.css(".datetimepicker:nth-child(14)>.datetimepicker-months thead tr .switch"));
        var timeOneYears = element(by.css(".datetimepicker:nth-child(14)>.datetimepicker-years thead tr .switch"));

        var oneYears = element(by.css(".datetimepicker:nth-child(14)>.datetimepicker-years tbody tr:first-child td span:nth-child(2)"));
        var oneMonths = element(by.css(".datetimepicker:nth-child(14)>.datetimepicker-months tbody tr:first-child td span:nth-child(1)"));
        

        var timeTwoMonths = element(by.css(".datetimepicker:nth-child(15)>.datetimepicker-months thead tr .switch"));
        var timeTwoYears = element(by.css(".datetimepicker:nth-child(15)>.datetimepicker-years thead tr .switch"));

        var twoYears = element(by.css(".datetimepicker:nth-child(15)>.datetimepicker-years tbody tr:first-child td span:nth-child(2)"));
        var twoMonths = element(by.css(".datetimepicker:nth-child(15)>.datetimepicker-months tbody tr:first-child td span:nth-child(1)"));
           

        timeOne.click();
        
        timeOneMonths.click();
        timeOneYears.click();

        oneYears.click();
        oneMonths.click();
        

        timeTwo.click();
        
        timeTwoMonths.click();
        timeTwoYears.click();

        twoYears.click();
        twoMonths.click();
        

        
        time.getText().then(function(txt){
            expect(txt).toBe("2010-01 2010-01");
        });
    });

    it('双时间控件和tab控件结合点击选择时间点是否正确',function(){
        //直接输入点击显示结果
        var time=element(by.css(".demo2 p"));
        var timeOne = element(by.css(".demo2 input:first-child"));
        var timeTwo = element(by.css(".demo2 input:nth-child(3)"));
        var accordion = element(by.css(".demo2 .theme"));
        accordion.click();

        var timeOneMinutes = element(by.css(".datetimepicker:nth-child(8)>.datetimepicker-minutes thead tr .switch"));
        var timeOneHours = element(by.css(".datetimepicker:nth-child(8)>.datetimepicker-hours thead tr .switch"));
        var timeOneDays = element(by.css(".datetimepicker:nth-child(8)>.datetimepicker-days thead tr .switch"));
        var timeOneMonths = element(by.css(".datetimepicker:nth-child(8)>.datetimepicker-months thead tr .switch"));
        var timeOneYears = element(by.css(".datetimepicker:nth-child(8)>.datetimepicker-years thead tr .switch"));

        var oneYears = element(by.css(".datetimepicker:nth-child(8)>.datetimepicker-years tbody tr:first-child td span:nth-child(2)"));
        var oneMonths = element(by.css(".datetimepicker:nth-child(8)>.datetimepicker-months tbody tr:first-child td span:nth-child(1)"));
        var oneDays = element(by.css(".datetimepicker:nth-child(8)>.datetimepicker-days tbody tr:first-child td:nth-child(6)"));
        var ontHours = element(by.css(".datetimepicker:nth-child(8)>.datetimepicker-hours tbody tr:first-child td span:nth-child(1)"));
        var ontMinutes = element(by.css(".datetimepicker:nth-child(8)>.datetimepicker-minutes tbody tr:first-child td span:nth-child(1)"));

        timeOne.click();

        timeOneMinutes.click();
        timeOneHours.click();
        timeOneDays.click();
        timeOneMonths.click();
        timeOneYears.click();

        oneYears.click();
        oneMonths.click();
        oneDays.click();
        ontHours.click();
        ontMinutes.click();

        var timeTwoMinutes = element(by.css(".datetimepicker:nth-child(15)>.datetimepicker-minutes thead tr .switch"));
        var timeTwoHours = element(by.css(".datetimepicker:nth-child(15)>.datetimepicker-hours thead tr .switch"));
        var timeTwoDays = element(by.css(".datetimepicker:nth-child(15)>.datetimepicker-days thead tr .switch"));
        var timeTwoMonths = element(by.css(".datetimepicker:nth-child(15)>.datetimepicker-months thead tr .switch"));
        var timeTwoYears = element(by.css(".datetimepicker:nth-child(15)>.datetimepicker-years thead tr .switch"));

        var twoYears = element(by.css(".datetimepicker:nth-child(15)>.datetimepicker-years tbody tr:first-child td span:nth-child(2)"));
        var twoMonths = element(by.css(".datetimepicker:nth-child(15)>.datetimepicker-months tbody tr:first-child td span:nth-child(1)"));
        var twoDays = element(by.css(".datetimepicker:nth-child(15)>.datetimepicker-days tbody tr:first-child td:nth-child(6)"));
        var twoHours = element(by.css(".datetimepicker:nth-child(15)>.datetimepicker-hours tbody tr:first-child td span:nth-child(1)"));
        var twoMinutes = element(by.css(".datetimepicker:nth-child(15)>.datetimepicker-minutes tbody tr:first-child td span:nth-child(1)"));

        timeTwo.click();

        timeTwoMinutes.click();
        timeTwoHours.click();
        timeTwoDays.click();
        timeTwoMonths.click();
        timeTwoYears.click();

        twoYears.click();
        twoMonths.click();
        twoDays.click();
        twoHours.click();
        twoMinutes.click();
        
        
        time.getText().then(function(txt){
            expect(txt).toBe("2010-01-01 00:00 2010-01-01 00:00");
        });
    });
    
    it('双时间控件和tab控件结合点击选择时间点是否正确',function(){
        //直接输入点击显示结果
        var time=element(by.css(".demo2 p"));
        var timeOne = element(by.css(".demo2 input:first-child"));
        var timeTwo = element(by.css(".demo2 input:nth-child(3)"));
        var accordion = element(by.css(".demo2 .theme"));
        accordion.click();
        var select = element(by.css(".demo2 select"));
        var option = element(by.css(".demo2 option:last-child"));
        select.click();
        option.click();

        var timeOneMonths = element(by.css(".datetimepicker:nth-child(14)>.datetimepicker-months thead tr .switch"));
        var timeOneYears = element(by.css(".datetimepicker:nth-child(14)>.datetimepicker-years thead tr .switch"));

        var oneYears = element(by.css(".datetimepicker:nth-child(14)>.datetimepicker-years tbody tr:first-child td span:nth-child(2)"));
        var oneMonths = element(by.css(".datetimepicker:nth-child(14)>.datetimepicker-months tbody tr:first-child td span:nth-child(1)"));
        
        timeOne.click();
        
        timeOneMonths.click();
        timeOneYears.click();

        oneYears.click();
        oneMonths.click();

        var timeTwoMonths = element(by.css(".datetimepicker:nth-child(15)>.datetimepicker-months thead tr .switch"));
        var timeTwoYears = element(by.css(".datetimepicker:nth-child(15)>.datetimepicker-years thead tr .switch"));

        var twoYears = element(by.css(".datetimepicker:nth-child(15)>.datetimepicker-years tbody tr:first-child td span:nth-child(2)"));
        var twoMonths = element(by.css(".datetimepicker:nth-child(15)>.datetimepicker-months tbody tr:first-child td span:nth-child(1)"));
        
        timeTwo.click();
       
        timeTwoMonths.click();
        timeTwoYears.click();

        twoYears.click();
        twoMonths.click();
        
        time.getText().then(function(txt){
            expect(txt).toBe("2010-01 2010-01");
        });
    });
    
    it('双时间控件和tab控件结合点击选择时间点是否正确',function(){
        //直接输入点击显示结果
        var time=element(by.css(".demo3 .p0"));
        var timeOne = element(by.css(".demo3 .demo-child0 input:first-child"));
        var timeTwo = element(by.css(".demo3 .demo-child0 input:nth-child(3)"));
    
        var timeOneDays = element(by.css(".datetimepicker:nth-child(11)>.datetimepicker-days thead tr .switch"));
        var timeOneMonths = element(by.css(".datetimepicker:nth-child(11)>.datetimepicker-months thead tr .switch"));
        var timeOneYears = element(by.css(".datetimepicker:nth-child(11)>.datetimepicker-years thead tr .switch"));

        var oneYears = element(by.css(".datetimepicker:nth-child(11)>.datetimepicker-years tbody tr:first-child td span:nth-child(2)"));
        var oneMonths = element(by.css(".datetimepicker:nth-child(11)>.datetimepicker-months tbody tr:first-child td span:nth-child(1)"));
        var oneDays = element(by.css(".datetimepicker:nth-child(11)>.datetimepicker-days tbody tr:first-child td:nth-child(6)"));
        
        timeOne.click();

        timeOneDays.click();
        timeOneMonths.click();
        timeOneYears.click();

        oneYears.click();
        oneMonths.click();
        oneDays.click();


        var twoDays = element(by.css(".datetimepicker:nth-child(15)>.datetimepicker-days tbody tr:first-child td:nth-child(6)"));
        timeTwo.click();        
        twoDays.click();

        time.getText().then(function(txt){
            expect(txt).toBe("2010-01-01 2010-01-04");
        });
    });

    it('双时间控件和tab控件结合点击选择时间点是否正确',function(){
        //直接输入点击显示结果
        var time=element(by.css(".demo3 .p2"));
        var timeOne = element(by.css(".demo3 .demo-child2 input:first-child"));
        var timeTwo = element(by.css(".demo3 .demo-child2 input:nth-child(3)"));
        var select = element(by.css(".demo3 .demo-child2 select"));
        var option = element(by.css(".demo3 .demo-child2 option:last-child"));
        select.click();
        option.click();
    
        var timeOneMonths = element(by.css(".datetimepicker:nth-child(14)>.datetimepicker-months thead tr .switch"));
        var timeOneYears = element(by.css(".datetimepicker:nth-child(14)>.datetimepicker-years thead tr .switch"));

        var oneYears = element(by.css(".datetimepicker:nth-child(14)>.datetimepicker-years tbody tr:first-child td span:nth-child(2)"));
        var oneMonths = element(by.css(".datetimepicker:nth-child(14)>.datetimepicker-months tbody tr:first-child td span:nth-child(1)"));
        
        timeOne.click();

        timeOneMonths.click();
        timeOneYears.click();

        oneYears.click();
        oneMonths.click();


        var timeTwoMonths = element(by.css(".datetimepicker:nth-child(15)>.datetimepicker-months thead tr .switch"));
        var timeTwoYears = element(by.css(".datetimepicker:nth-child(15)>.datetimepicker-years thead tr .switch"));

        var twoYears = element(by.css(".datetimepicker:nth-child(15)>.datetimepicker-years tbody tr:first-child td span:nth-child(2)"));
        var twoMonths = element(by.css(".datetimepicker:nth-child(15)>.datetimepicker-months tbody tr:first-child td span:nth-child(1)"));
        
        timeTwo.click();
       
        timeTwoMonths.click();
        timeTwoYears.click();

        twoYears.click();
        twoMonths.click();


        time.getText().then(function(txt){
            expect(txt).toBe("2010-01 2010-01");
        });
    });
});