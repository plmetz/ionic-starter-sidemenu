#!/usr/bin/env bash
curl --user 9188d881d648eba94dbdd1c7ce06c6cb5b408cba: \
    --request POST \
    --form revision=5555c45e0fe1d2940775a285ec310c999599224e \
    --form config=@config.yml \
    --form notify=false \
        https://circleci.com/api/v1.1/project/github/plmetz/ionic-starter-sidemenu/tree/features/ci
