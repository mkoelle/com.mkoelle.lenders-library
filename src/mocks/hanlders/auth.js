import { rest } from 'msw'

const authUrl = 'https://cognito-idp.us-east-1.amazonaws.com/'


const auth = [
    rest.post(authUrl, async (req, res, ctx) => {
        // return await capturePassthrough(ctx, req, res)

        // fail on any request with a username or OTP of 'BAD'
        if (req?.body?.AuthParameters?.USERNAME?.toLowerCase() === 'bad' ||
            req?.body?.Username?.toLowerCase() === 'bad' ||
            req?.body?.ConfirmationCode?.toLowerCase() === 'bad') return res(ctx.status(403))

        // Login Request
        if (req?.body?.AuthFlow) return res(ctx.json(mockPasswordVerififier))
        // Passsword Verification
        if (req?.body?.ChallengeName) return res(ctx.json(mockAuthResult))
        // User Registration
        if (req?.body?.ValidationData) return res(ctx.json(mockRegistration))
        // OTP Validation
        if (req?.body?.ConfirmationCode) return res(ctx.json(mockOTPResponse))
        return res(ctx.status(400))
    })
]

export default auth

async function capturePassthrough(ctx, req, res) {
    const originalResponse = await ctx.fetch(req)
    const originalResponseData = await originalResponse.json()
    return res(ctx.json(originalResponseData))
}


const mockAuthResult = {
    AuthenticationResult: {
        AccessToken: "eyJraWQiOiJ3K29lZk9oZXNKOUxNOXBIdFg4NnRTcDB1K25aRzJIb0lJV2U3ektUTlE4PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJkMGNhMDFhNi01NzkxLTQxNmUtYjY2NC1hYjVhNWIxMTAxZWIiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9XNW1VWFdvNkEiLCJjbGllbnRfaWQiOiIyMWZlMzNsZnZ2bnJhaWxqN3J0NTQ5anFidSIsIm9yaWdpbl9qdGkiOiJjZjIyMjU3MC02MzI5LTQ5MTItODU5ZC05ODIzMDRjMTM4YTQiLCJldmVudF9pZCI6IjY5YmIzMDkxLWE1ZWEtNGNkZi05MjQ4LWNiODgwYjZjMjY3NCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTg5NTg1NzYsImV4cCI6MTY1ODk2MjE3NiwiaWF0IjoxNjU4OTU4NTc2LCJqdGkiOiIxYzQ5ZTlhOS02ZGUyLTQxZDEtYmUzNi00MDVkOTZkYmVhNDkiLCJ1c2VybmFtZSI6InRlc3RndXkifQ.IiXrBpZBRqZS10fDiZVfhtMcyACLmRaDcdFmJvf-zkeHOsXdNDZPAwxylZ2gtjZOP3GxnRvP143nIvNycYEzIYsthfKStdrzGecqMvp5hGHz8wha26aSY6zJFbwjPf3_ev4rtbBuDbjKzHW4czKbuMi0nd3DTLC2GHNXFMbT4_76gpsFNdy6kFfs9LjJI8pNauKtP68w8XpGDbURDeXAdywFpn3DtoNNmW94wdaaCH5Txws5EiDY1yncwkWlh5m70X5yCl2PjW0KtukR4uzYaXlVZrCxYNzkdk4jqXpMmeUKrYAOD3qkZ7KqhjsnM6qCtOVcJwSJcs8OZ0BTWX3KlA",
        ExpiresIn: 3600,
        IdToken: "eyJraWQiOiJEWnVVUHVZRjByZk8rMjN0WEFOQU9hVkZIZllvTEc2bUw0RUI3WXRtUzFzPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJkMGNhMDFhNi01NzkxLTQxNmUtYjY2NC1hYjVhNWIxMTAxZWIiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1c1bVVYV282QSIsImNvZ25pdG86dXNlcm5hbWUiOiJ0ZXN0Z3V5Iiwib3JpZ2luX2p0aSI6ImNmMjIyNTcwLTYzMjktNDkxMi04NTlkLTk4MjMwNGMxMzhhNCIsImF1ZCI6IjIxZmUzM2xmdnZucmFpbGo3cnQ1NDlqcWJ1IiwiZXZlbnRfaWQiOiI2OWJiMzA5MS1hNWVhLTRjZGYtOTI0OC1jYjg4MGI2YzI2NzQiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY1ODk1ODU3NiwibmFtZSI6InRlc3RndXkiLCJleHAiOjE2NTg5NjIxNzYsImlhdCI6MTY1ODk1ODU3NiwianRpIjoiZmQ3ZDQ4YWUtMjBiYy00ODRkLTkyYWItZDRhNWVhM2YxNjQ2IiwiZW1haWwiOiJta29lbGxlK3Rlc3RndXlAZ21haWwuY29tIn0.NwjxQk4rf295jSlEKgfh--OWVpMQl1PigRe_YFEMZW81gZtJXsvmiOnidHZkUe-ySX77-VflVFaaXRMWNjkjVbyCMOvqZysQUxMYhDURDPjeTYaRXdMM1r1ykXk5iwsEwlQYJYabIjKZqa55wFzsi-4_vfeefACsq3OfSsgWBT7jKHoQxCkfxkh1fpdHIGXI1LIFMV_q2wdjxIMOJHMoRLoLOBiC44KEqZQqRgSTQmkhGh4EqbQpfGOjuXvbGQGGNs56OtMOYxIrhBuF0AcQps4L_pLapqND7K9dftdA2OnyPlHT9pEDue6N0B0WNR6d2pFAtbXgd-pSF3gpz-N0Mg",
        RefreshToken: "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.Q6zqfNQWXRLdfAYLeS9eeZ6z9t1vb2FjRt89r5z8Sa35wrCszxthy3Sax4ObYTkBJc8gqad_yrpdTrVS7cpHtu6_OD3R6rI5t2lI4pSbxBHcG3rOGnhGZl_G9CG2yqjLi1AFgoQqUPR4R0kNACZAvY34JfJggqKVh3WNhTbkXhiZ_Gv1gXHKl2_7b-LobqUZK4wEa06VzBWzjuWMG3ZsnVk--WL0HAaI7O0HCOcnes1X5Mezr9pNrv6iRmCIh336L2r9VCzZj9JGnWun9Y1DnuBBe8expsExoBb6XQp0gX2UEer_jJX-9eW-bsf8GsDsNJxrOkyBTDqRiIlggf9tXQ.CKAbGrofNW0nI5-K.M7B0ronrKcsH7s91vDuafJU4gq2yOBCWWflxlFicKvBFfmHEVR0KzoU9ixVak2fNpKYUrKBDrUl1gsOQZVkeE2hfUbyuk3XfA_n0pe-D5966IKoB7JZfrshcOY16h2B3UuPlcL5ecVtBOuNfLckwlv4_F-GMcEITjsk1ojO9qwCqV_QFg2_V1Ja5GH-vS18bt-JuN27FBuvCsnrtviQ3FOv1ppEhV8OXvhxBi4435vAlziMijT4Rmgd66gel9dP47gYiVW5djFKmQ4NNOiXbYmHNlGvRTk1p3hnAqtd72YSgbGZigLMzJvW-HyiK0SBbV9s8BAf7jCx1lW8XTgyHoF5swJVcwFDRbhha50VRLeXTYUMA5zx3oHAnza3xrYps5rn98dbonbACcrb7zAVkFIVyt0wN8p6x3NiZa1SE6QAw3rgORsN2kbsZOpD12JFVnB6MjXtCFT1MSBqH2wzuYVJjVisCahQeRE2E2WeWNIAG8npzWNHVEKCiDySfy2Pb6O8azckvUHerFMyHF1xw1BuVByODj3BYHDYFe_TEheb83WQcVcBx85GXKjCnARbLPCiL6AbBo0s-8T0p4AjZ599QCZG3BdVxeCBOAcO9-ae9gshXc6TAL2IYNuM4U0Y2IKLjFFRI4b9oE1kSZwqGf7RZ1I5MgscYeH70EwswkKgU2Z13nfJkasDNKIxc_SfPCk9rwzimqpSZs02cbYSBVyfXzkYzMHX38_VI_fewz9k-u_oEZ1N6kyAWAFJKg9s3adxv03rpmECaeNeMOlbeWuLfze-fJMCgVClezxJBiTdaEF9UPAHUjS7_3nKY2AF76mth2KgqPALBjiGJe_IiK6gPtqApUz5CPRphW5kwx77GML2DtgznY-xjLuKQQGS0ReFekQx3kGzuhgOr4YnnlLS8yd1Dm80n5nUy-dOiiPRlJyIi1G01tIj6M9GRPOZTlV7si0w9laZ1SP3wuhb07MdDPIIP2xuzR2pV9pMnGT9cracTBRplrfbMWL5OTiFf0fI57vxnsCh7w6aEDz4oc2GgV0Kmh0Log25Ze4iLEbABzAu7aJaQS3rcUbzCxilkqQYKhWDTAS84VJ96-wNQIpTEs7HGbSipHAoA3qXj59tLkzJ2gOzhso5NFDoeMBt9Zbi3OvwYcv8JLpXso1WYDrddMyTZvRi5JV5moovXkaCxveflrt2BoUtK0usHEZC6lV_PECjeTCPUEmQXqTGlJ0Gh4Kw5VKeS2ayGP2QglMSdCQhmvWV_gzKXOnGhrS7Cza9gerI.IPJdTGaN05geqhS8u5HM2w",
        TokenType: "Bearer"
    },
    ChallengeParameters: {}
}
const mockPasswordVerififier = {
    ChallengeName: "PASSWORD_VERIFIER",
    ChallengeParameters: {
        SALT: "53a85484a4f73d8bb52ccd871e21b077",
        SECRET_BLOCK: "rEjtcMaMeDVhbS3Zg3DVqR/hxgdWrdmYnTKAJu2CDNUal4naloXAURhcyHplxXuov06nzS6vuTPGt2kYwH066o4TsGwtNqGBUzrd8uBjc0Q/CVPoSVN8Ld/HT9RvKSfs/PrH1OE42ytpzb+HuLYKJ/fe+nKAzkd0ILMuQbIYkA2QJxgsxxlpzTpsGTUEZmT31D7iDL0YvW6sijhiRUoyph96RoD2zt6pKGP/9t1Vloka70FtVwzcK6KQqdR+UTElYeueVhJFR0MPu8/qN3qBxSu3pekNuuDWZTkmJWG12EJ/yaAUF8bztIZTeOJURAJkVAzuX/lU3YMux+4G3uDyIM/Igu7l7YGuuS6EaHkWVlnVFZPX+9dMWvcF8urIiP/Qcd3C0HiF/SxImBHv1c/IYuSDAbTHtdV412QuCHGWLpw7nIiZhIVvuwP1akFrp3Z9XwrikAqFe22Xz7z+TqVgbb00hFpAxB2KNwAG7D/V0LYMBqlPS9ll1oN1YcR+nQ5R3Xv9Wudj+x7oLyPC+CYAqGCuZzdkQWEOMJiB8ms+DhEpU8Kaak6pyHNUriUmDA/bbdssevKLEJwV5y9ohZ6gVp/x85Oj48IsmdT0K+GI7X9KaflyEuOUA/ry4qF+HraJWWja0cBU3cGIb0ZI4HHRqUXYt3ls8Ti5z6IhnRdWGj0GTS5/tUuTR8Pp8MVGtsowWiDhvLKG4VOexVdOU5DuGMyNqK5i1TnBoRTRmHCmJja0I/rppJn1r7YX130uFakMpq21v0AleEe1SSsFEeyloNYKiBj517URBmbO/KEZBRo+GTPzvT410YMgjcIezwMtvUHIXUNC169+53SJh+3sVElt4nZjnzH049T3uBUoNJxPUPqOGZtKjx+JUWraNzxTBJnhTma4PnVu8MxWJ+C2q0D+4aMR32sezK8iKfU51XQxH8CShHn5UxM00dmu7GqRQDcmGsb8DR/PEXhz6P5u5sCv150VTomcyhJKJspiP5gaYYe5bBgpRb3RCFf5DUBVnqClSrA6rpeT6L59rYAtUQ3PDHJICHIh33IDU1Kip+mYycun94YP4jPByri1mUi6PwHqtr/YBk/E1F5UwmsIXT1dtjvJo3bYquOIRciH2G9wf+0nNTIopCJ2gIA7fjiEtm119z7z3Yd1AxYMVaeaQfwynsVGEFcJu3X9T49HkzHgHW270rg3nZ0RuMTIkUyCH1Gtk+p9xI7Plp87QzzFQZiQb+sOXRg6MwehFo3jjlChe94AJr4CAbCDofPFnIMKTX24KaBxecUtTpVSKFVc68gal/fAuOx3khZgazOkR5k/5FNe8UpdBtZ7rodaNrM97fe5B3YiwmfYQZMTR3kKaI4x/nmLKceEfP6wzh+9MI+SFyrjpdIRlLP7ooV5xa4Nhh/eTfm9P64R+kZg7/CBMIbDn7/GKGJdwgm5sv0uQpenkRNSjUeqk67ERavVb8zBjKjIHz+eFwd207/fN007qlLOa0Ues8kl5+2YYvHP7WVklLEtRHsEbeFEGLOphon9t3slIwspirwXxmYxNiSUIlvj+2cSemuAFEroGQ+zc84RirboOx7ovZdNI9A25pYV1Hloj2ygl/WQjYPmFY3RCAvbChUcCY5TDi07CdDDESGR8yg+CU76eQYAJFDd5aCW3E2lgEHKgDvh/6mhxIqXMLHanS3+fo8wjcilmhN3jBEw1qE2QdKdFBza+A==",
        SRP_B: "8e4568f1d600e98e55c86e1f1fec63f586b253293490f1ae600468448ba3d0c98d816d857faabe39d30bab47cbadb01623dc5038927e1e9b505fc42cc4c10b54c4b48e4f03f20118a121bc4a21da11813320c3e400109860adc4c3f7b2951166b2c93fdbe7f942210f7eb0ea306c70fcdc984e65488313cb38051211b376140f3ba31d4b955a83abad18ac83f822438c0b251954089ae83192496f118662fa8754262ecf94b8ed229f0e37cd5936647e693ee0ea629c8382e8140ac294a4e99bdc438f8ce711794f599d0e36388c7826ac9f149ac6e9a9d5f0f98d87643ae57c4653e12259356c08047b03087e8bc4ac47dd9e08eb7e2c01b6cdec3f8882c2842fa3115d091178b28b5cb0566a8935374b9933cc17b98fe389335cf97f23630eb096ad36fc3dc28cf1ee56a6ac7a55ca40ae486a2b8da03455eb6f67c524379c1146ed09c81bab387e958135c7a815657030b44b7821c407f0ee43bc55c83eb596e9ae2ce7aabead8241c9a99377203bacfb796bbcb23f4edf7d9f55b961ed38",
        USERNAME: "testguy",
        USER_ID_FOR_SRP: "testguy"
    }
}

const mockRegistration = {
    __type: "ResourceNotFoundException",
    message: "User pool client 45xx55xxxxxxxxxx6xx444xxxx does not exist."
}

const mockRegistration2 = {
    CodeDeliveryDetails: {
        AttributeName: "email",
        DeliveryMedium: "EMAIL",
        Destination: "m***@n***"
    },
    UserConfirmed: false,
    UserSub: "109e6ebb-3e64-4027-8cfe-251e0190c3f6"
}

const mockOTPResponse = {
    __type: "CodeMismatchException",
    message: "Invalid verification code provided, please try again."
}