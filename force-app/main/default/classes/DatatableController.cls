public with sharing class DatatableController {
    @AuraEnabled(cacheable=true)
    public static List<Account> fetchAccounts() {
        return [SELECT Id, Name from Account limit 10];

    }
}