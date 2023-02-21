import {ConfigOptions} from '@datenkraft/bb-base-api-ts-client';
import {ControlServerApiClient} from '../dist';

describe('Client Test (staging)', () => {
    test('Initialize and use the generated Client', (done) => {
        const configOptions: ConfigOptions = {
            clientId: process.env.DEV_CLIENT_ID ?? '',
            clientSecret: process.env.DEV_CLIENT_SECRET_STAGING ?? '',
            oAuthTokenHost:
                'https://authentication-api.staging.backbone.datenkraft.info',
        };

        ControlServerApiClient.init(
            configOptions,
            'https://control-server-api.staging.backbone.datenkraft.info/v1'
        )
            .then(() => {
                ControlServerApiClient.Generated.TaskTemplateService.getTaskTemplateCollection()
                    .then((taskTemplateCollection) => {
                        expect(taskTemplateCollection).toBeTruthy();
                        done();
                    })
                    .catch((error) => {
                        done(error);
                    });
            })
            .catch((error) => {
                done(error);
            });
    });
});
