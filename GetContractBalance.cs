// GetWalletAddress.cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
using System.Runtime.InteropServices;

public class GetContractBalance : MonoBehaviour
{
    [DllImport("__Internal")] private static extern string ContractBalance();

    void Start()
    {
        var balance = ContractBalance();

        if (balance == "1") {
            SceneManager.LoadScene("Playground");
        }
    }
}