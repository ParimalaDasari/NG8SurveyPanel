export class LandModel{
    public District: string;
    public Mandal: string;
    public Village: string;
    public SurveyNumber: string;
    public Pattadar_Name: string;
    public Father_Or_Husband_Name: string;
    public TotalExtent_Ac_Gnts: string;
    public Land_Status: string;
    public Land_Type: string;
    public Nature_of_Land: string;
    public Land_Classification: string;
    public Market_Value: string;
    public Transaction_Status: string;
    public eKYC_Status: string;
    public PPB_Number: string;

  constructor(
    District: string, 
    Mandal: string, 
    Village: string, 
    SurveyNumber: string, 
    Pattadar_Name:string,
    Father_Or_Husband_Name: string, 
    TotalExtent_Ac_Gnts: string, 
    Land_Status: string, 
    Land_Type: string, 
    Nature_of_Land: string, 
    Land_Classification: string, 
    Market_Value: string, 
    Transaction_Status: string, 
    eKYC_Status: string, 
    PPB_Number: string
) {
    this.District = District
    this.Mandal = Mandal
    this.Village = Village
    this.SurveyNumber = SurveyNumber
    this.Pattadar_Name = Pattadar_Name
    this.Father_Or_Husband_Name = Father_Or_Husband_Name
    this.TotalExtent_Ac_Gnts = TotalExtent_Ac_Gnts
    this.Land_Status = Land_Status
    this.Land_Type = Land_Type
    this.Nature_of_Land = Nature_of_Land
    this.Land_Classification = Land_Classification
    this.Market_Value = Market_Value
    this.Transaction_Status = Transaction_Status
    this.eKYC_Status = eKYC_Status
    this.PPB_Number = PPB_Number
  }

}